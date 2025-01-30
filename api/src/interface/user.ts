import { Optional } from "sequelize";

export interface IUser {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
}

export interface IUserCreationAttributes extends Optional<IUser, "id"> {}
