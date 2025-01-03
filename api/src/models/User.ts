import { DataTypes } from 'sequelize';
import sequelize from '../database/database';

export const User = sequelize.define(
    'User',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },



);



// console.log(User === sequelize.models.User); 