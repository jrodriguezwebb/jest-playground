import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { booksRouter } from './controllers/books';

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.get('/books', booksRouter);

app.listen(PORT, () => console.log(`Listening ${PORT}`));
