import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/GlobalErrorHandler';
import notFound from './app/middlewares/NotFound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/', router);

//global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
