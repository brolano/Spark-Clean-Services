import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(json());

// MongoDB Connection
const mongoURI: string | undefined = process.env.MONGODB_URI;
if (!mongoURI) {
  console.error('MongoDB URI is missing from environment variables');
  process.exit(1);
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Apollo Server Setup
const apolloServer = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await apolloServer.start();
  app.use('/graphql', expressMiddleware(apolloServer));

  app.get('/', (req: Request, res: Response) => {
    res.send('API is running...');
  });

  const PORT: number = Number(process.env.PORT) || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();