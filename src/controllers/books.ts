import express, { Request, Response } from 'express';
import { books } from '../models/books';

export const register = ( app: express.Application ) => {
    app.post('/books',  (req: Request, res: Response) => {
        if(!req.body.isbn || !req.body.tittle ) {
        res.status(400);
        res.json({ message: 'Bad Request'});
        } else {
        const book = req.body;
        books.push(book);
        res.send('Book is added to the database');
        }
    });
    
    app.get('/books',  (req: Request, res: Response) => {
        res.json(books);
    });
    
    app.put('/books/:id',  (req: Request, res: Response) => {
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
    
    app.delete('/books/:id',  (req: Request, res: Response) => {
        const isbn = req.params.id;
        const bookIndex = books.findIndex( book => book.isbn == isbn );
        if (bookIndex == -1) {
            res.status(404).send(`book with isbn ${req.params.id} was not found`);
        } else {
            books.splice(bookIndex, 1);
            res.send('Successfully Deleted');
        }
    });
};
