import { DataTypes, Model } from 'sequelize';
import db from '../database/database.config';
import EmployeeDepartmentHistory from './EmployeeDepartmentHistory';
import Department from './Department';

interface IEmployee {
	BusinessEntityID: number;
	NationalIDNumber: string;
	LoginID: string;
	OrganizationNode: string;
	OrganizationLevel: number;
	JobTitle: string;
	BirthDate: string;
	MaritalStatus: string;
	Gender: string;
	HireDate: string;
	SalariedFlag: boolean;
	VacationHours: number;
	SickLeaveHours: number;
	CurrentFlag: boolean;
	rowguid: string;
	ModifiedDate: string;
}

class Employee extends Model<IEmployee> {}

Employee.init({
  BusinessEntityID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
	NationalIDNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
	LoginID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
	OrganizationNode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
	OrganizationLevel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
	JobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
	BirthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
	MaritalStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
	Gender: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
	HireDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }, 
	SalariedFlag: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }, 
	VacationHours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }, 
	SickLeaveHours: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }, 
	CurrentFlag: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }, 
	rowguid: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
	ModifiedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }, 
}, {
  sequelize: db,
  modelName: 'Employee',
  schema: 'HumanResources',
  tableName: 'Employee',
  timestamps: false
});

Employee.hasMany(EmployeeDepartmentHistory, { 
  as: 'EmployeeDepartmentHistory', 
  sourceKey: 'BusinessEntityID', 
  foreignKey: 'BusinessEntityID' 
});

export default Employee;
