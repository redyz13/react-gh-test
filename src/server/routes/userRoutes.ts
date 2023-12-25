import express, { Request, Response } from 'express';
import { PersonDAO } from 'server/dao/PersonDAO';

const router = express.Router();
const personDAO = new PersonDAO();

router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await personDAO.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
