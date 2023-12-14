import express from 'express';
import { PersonDAO } from './model/PersonDAO';

const app = express();
const port = 3001;

const personDAO = new PersonDAO();

app.get('/users', async (req, res) => {
  try {
    const users = await personDAO.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
