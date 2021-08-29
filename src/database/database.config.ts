import { Sequelize } from 'sequelize';

const db = new Sequelize(
  'AdventureWorks2017',
  'adventureworksuser',
  'password123',
  {
    dialect: 'mssql',
    host: 'localhost',
    port: 1434,
    logging: false,
  },
);

export default db;
