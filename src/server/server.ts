import express from 'express';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import { PersonDAO } from 'model/PersonDAO';

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const app = express();

const personDAO = new PersonDAO();

// CORS config
// TODO remove localhost from allowedOrigins before production
const allowedOrigins = ['https://redyz13.github.io', 'http://localhost:3000'];
const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, allow?: boolean) => void
  ) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET, POST',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get('/users', async (req, res) => {
  try {
    const users = await personDAO.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 3001;
const server = https.createServer({ key: key, cert: cert }, app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
