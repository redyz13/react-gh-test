import express, { Request, Response } from 'express';
import { PersonServiceInterface } from 'server/services/PersonServiceInterface';
import { PersonService } from 'server/services/PersonService';

const router = express.Router();
const personService: PersonServiceInterface = new PersonService();

router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await personService.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
