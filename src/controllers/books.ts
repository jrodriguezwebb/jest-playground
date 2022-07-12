import * as express from 'express'
import { books } from '../models/books';
export const booksRouter = express.Router();

booksRouter.post('/',  (req, res) => {
  if(!req.body.isbn || !req.body.tittle ) {
    res.status(400);
    res.json({ message: 'Bad Request'});
  } else {
    const book = req.body;
    books.push(book);
    res.send('Book is added to the database');
  }
});

booksRouter.get('/',  (req, res) => {
    res.json(books);
});

booksRouter.put('/:id',  (req, res) => {
    const isbn = req.params.id;
    const data = req.body;

    const bookIndex = books.findIndex( book => book.isbn == isbn );
    if (bookIndex == -1) {
        res.status(404).send(`book with isbn ${req.params.id} was not found`);
    } else {
        books[bookIndex] = data;
        res.send('Successfully Updated');
    }
    res.send('Hello World')
});

booksRouter.delete('/:id',  (req, res) => {
    const isbn = req.params.id;
    const bookIndex = books.findIndex( book => book.isbn == isbn );
    if (bookIndex == -1) {
        res.status(404).send(`book with isbn ${req.params.id} was not found`);
    } else {
        books.splice(bookIndex, 1);
        res.send('Successfully Deleted');
    }
});
