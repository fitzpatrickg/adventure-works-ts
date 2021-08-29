import { DataTypes, Model } from 'sequelize';
import db from '../database/database.config';
import Department from './Department';

interface IEmployeeDepartmentHistory {
  BusinessEntityID: number;
  DepartmentID: number;
  ShiftID: number;
  StartDate: string;
  EndDate: string;
  ModifiedDate: string;
}

class EmployeeDepartmentHistory extends Model<IEmployeeDepartmentHistory> {}

EmployeeDepartmentHistory.init({
  BusinessEntityID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  DepartmentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  ShiftID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  StartDate: {
    type: DataTypes.DATE,
    primaryKey: true,
    allowNull: false,
  },
  EndDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ModifiedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'EmployeeDepartmentHistory',
  schema: 'HumanResources',
  tableName: 'EmployeeDepartmentHistory',
  timestamps: false
});

EmployeeDepartmentHistory.hasMany(Department, { 
  as: 'Department', 
  sourceKey: 'DepartmentID', 
  foreignKey: 'DepartmentID' 
});

export default EmployeeDepartmentHistory;
