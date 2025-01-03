import { Request, Response } from "express";
import { User } from "../models/User";
export const createUser = async (req : Request , res : Response) => {
    try {
        const { firstName , lastName , email } = req.body;
        const addUser =  User.create({ firstName, lastName , email });
        res.json({
            success : true,
            user : addUser
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const getAllUsers = async (req : Request , res : Response) => {
    console.log("inside ");
    
    try {
        const users = await User.findAll();
        console.log(users , "users");
        
        res.json({
            success : true,
            message : "Users fetched Successfully !",
            users
        })
    } catch (error) {
        console.log(error);
        
    }
}