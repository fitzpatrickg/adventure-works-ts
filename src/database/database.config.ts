import { Sequelize } from 'sequelize';
import Department from '../model/Department';
import Employee from '../model/Employee';
import EmployeeDepartmentHistory from '../model/EmployeeDepartmentHistory';

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
