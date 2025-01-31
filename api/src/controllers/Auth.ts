import { Request, Response } from "express";
import jwt , { TokenExpiredError } from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { User } from "../models/User";

import { RefreshToken } from "../models/RefreshToken";
dotenv.config();

interface JwtPayload {
  id: number;
}


// TODO , if refresh token exist in db then dont create new refresh token , this is not yet implemented that is why causing issue
export const login = async (req: Request, res: Response): Promise<any> => {
  const { email, password, rememberMe } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }


    const payload = {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      is_active: user.is_active,
    };
    const accessToken = jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "7h" }
    );

    const refreshTokenExpiry = rememberMe ? "30d" : "7d";
    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: refreshTokenExpiry }
    );

    await RefreshToken.create({
      userId: user.id,
      refreshToken,
      expiresAt: new Date(
        Date.now() +
          (rememberMe ? 30 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000)
      ),
    });
    user.password = "";
    const userDetails = { ...user.dataValues, accessToken, refreshToken };

    return res.status(200).send(userDetails);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



export const refreshToken = async (req: Request, res: Response): Promise<any> => {
    const token =
    req?.body?.token ||
    req?.cookies?.token ||
    req?.header("Authorization")?.replace("Bearer ", "");
      
  
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
  
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY as string
      ) as JwtPayload;
  
      const userId = decoded.id;
  
      // Check if the user exists
      const user = await User.findByPk(userId);
      console.log(user , "user");
      
      const payload = {
        id: user?.dataValues.id,
        email: user?.dataValues.email,
        first_name: user?.dataValues.first_name,
        last_name: user?.dataValues.last_name,
        is_active: user?.dataValues.is_active,
      };

      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const storedRefreshToken = await RefreshToken.findOne({ where: { userId: user.id } });
  
      if (!storedRefreshToken || storedRefreshToken.refreshToken !== token) {
        return res.status(403).json({ message: "Invalid refresh token" });
      }

      const newAccessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
        expiresIn: "1h",
      });
  
      const newRefreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
        expiresIn: "7d",
      });
  
      await RefreshToken.update({ refreshToken: newRefreshToken }, { where: { userId: user.id } });
  
      return res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({ message: "Refresh token expired. Please log in again." });
      }
      console.error("Error refreshing token:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
