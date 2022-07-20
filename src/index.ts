import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as booksRoutes from './controllers/books';

export const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });

// Configure routes
booksRoutes.register(app);

export const server = app.listen(PORT, () => console.log(`Listening ${PORT}`));
