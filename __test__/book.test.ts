import { default as request } from 'supertest';
import { app, server }  from '../src';
import { books }  from '../src/models/books';

describe('Testing APIs', () => {
    it('Get API callback', (done) => {
        request(app)
            .get('/books')
            .expect(200)
            .expect(response => {
                const result = response.body;
                expect(result).toHaveLength(2);
                expect(result[0]).toStrictEqual(books[0]);
                expect(result[1]).toStrictEqual(books[1]);
                server.close();
            })
            .end(done);
    });

    it('Get API promise', async () => {
        const response = await request(app)
            .get('/books')
            .expect(200);
            
        const result = response.body;
        expect(result).toHaveLength(2);
        expect(result[0]).toStrictEqual(books[0]);
        expect(result[1]).toStrictEqual(books[1]);
        server.close();
    });
});