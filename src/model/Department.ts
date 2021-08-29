import { DataTypes, Model } from 'sequelize';
import db from '../database/database.config';

interface IDepartment {
  DepartmentID: number;
  Name: string;
  GroupName: string;
  ModifiedDate: string
}

class Department extends Model<IDepartment> {}

Department.init({
  DepartmentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GroupName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ModifiedDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Department',
  schema: 'HumanResources',
  tableName: 'Department',
  timestamps: false
});

export default Department;
