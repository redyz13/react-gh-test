import cors from 'cors';
import express from 'express';
import fs from 'fs';
import https from 'https';
import personRoutes from './routes/gestione_utenti/personRoutes';

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const app = express();

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

// Person routes
app.use(personRoutes);

const port = 3001;
const server = https.createServer({ key: key, cert: cert }, app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
