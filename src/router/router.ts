import express, { Request, Response } from 'express';
import Department from '../model/Department';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    return res.json({ msg: 'hello world' });
});

router.get('/departments', async (req: Request, res: Response) => {
  try {
    const departments = await Department.findAll({ where: {} });
    console.log(departments);

    return res.json(departments);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
