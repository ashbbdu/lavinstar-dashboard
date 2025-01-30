import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database/database";



// Interface for refresh token model (for typescript)
interface IRefreshTokenAttributes {
  id: number;
  userId: number;  // Foreign Key to Users table
  refreshToken: string;  // The actual refresh token
  expiresAt: Date;  // Expiry of the refresh token
}

interface IRefreshTokenCreationAttributes
  extends Optional<IRefreshTokenAttributes, "id"> {}

// Sequelize Model definition
export class RefreshToken extends Model<IRefreshTokenAttributes, IRefreshTokenCreationAttributes> {
  public id!: number;
  public userId!: number;
  public refreshToken!: string;
  public expiresAt!: Date;
}

RefreshToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",  
        key: "id",
      },
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize, 
    tableName: "refresh_tokens",
    timestamps: true,
  }
);
