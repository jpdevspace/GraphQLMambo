import 'dotenv/config';
import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';

import graphqlSchema from './graphql/schema';
import graphqlResolver from './graphql/resolvers';

const app: Express = express();
const port = process.env.PORT || 3000;
const mongo_uri: string = process.env.MONGO_URI || '';

app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(
  '/graphql', 
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TS');
});


mongoose
  .connect(mongo_uri)
  .then(res => app.listen(port, () => console.log(`[Server]: Server is running at port: ${port}`)))
  .catch(err => console.error('Error connecting to your Mongo Atlas DB'))
