import path from 'path';
import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

import mongoose from 'mongoose';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TS');
});

app.listen(port, () => {
  console.log(`[Server]: Server is running at port: ${port}`);
});