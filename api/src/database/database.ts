import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.USER_NAME as string, 'ash@Compunnel09' , {
    host : "localhost",
    dialect: 'mysql',
    timezone: "+00:00",
    logging: false 
  });  
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
