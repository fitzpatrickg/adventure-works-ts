import express, { Request, Response } from 'express';
import Department from '../model/Department';
import Employee from '../model/Employee';
import EmployeeDepartmentHistory from '../model/EmployeeDepartmentHistory';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    return res.json({ msg: 'hello world' });
});

router.get('/departments', async (req: Request, res: Response) => {
  try {
    const departments = await Department.findAll({ where: {} });

    return res.json(departments);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get('/employees', async (req: Request, res: Response) => {
  try {
    const employees = await Employee.findAll({
      attributes: [ 
        'OrganizationLevel', 
        'JobTitle', 
        'Gender', 
        'HireDate', 
        'SalariedFlag', 
        'VacationHours', 
        'SickLeaveHours'  
      ],
      include: [
        {
          model: EmployeeDepartmentHistory, 
          as: 'EmployeeDepartmentHistory',
          include: [
            {
              model: Department,
              as: 'Department'
            }
          ]
        }
      ]
    });

    return res.json(employees);
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
});

export default router;
