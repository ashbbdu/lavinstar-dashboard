// import { DataTypes } from 'sequelize';
// import sequelize from '../database/database';

// export const User = sequelize.define(
//     'User',
//     {
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         lastName: {
//             type: DataTypes.STRING,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     },



// );



// console.log(User === sequelize.models.User); 


import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database";
import { IUser, IUserCreationAttributes } from "../interface/user";

export class User extends Model<IUser, IUserCreationAttributes> implements IUser {
    public id!: number;
    public email!: string;
    public password!: string;
    public first_name!: string;
    public last_name!: string;
    public is_active!: boolean;
  }
  
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notNull: { msg: "Email is required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 12],
            msg: "Password must be between 6 and 12 characters",
          },
          notNull: { msg: "Password is required" },
        },
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 50],
            msg: "First name must be between 2 and 50 characters",
          },
          notNull: { msg: "First name is required" },
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 50],
            msg: "Last name must be between 1 and 50 characters",
          },
          notNull: { msg: "Last name is required" },
        },
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "users",
      sequelize, // passing the sequelize instance to the model
      timestamps: true,
    }
  );
  
  export default User;