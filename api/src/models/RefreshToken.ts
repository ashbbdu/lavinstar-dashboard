import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database/database";



interface IRefreshTokenAttributes {
  id: number;
  userId: number;  
  refreshToken: string;  
  expiresAt: Date; 
}

interface IRefreshTokenCreationAttributes
  extends Optional<IRefreshTokenAttributes, "id"> {}

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
