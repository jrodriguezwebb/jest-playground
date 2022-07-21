import supertest from "supertest";
import app  from '../src/app';
import { books }  from '../src/models/books';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let server: any, request: supertest.SuperTest<supertest.Test>;
describe('Testing APIs', () => {
    beforeEach(async () => {
        jest.resetModules();
        server = app.listen(3002);
        request = supertest(server);
    });
    
    afterEach(() => {
        server.close();
    });
    it('Get API callback way', (done) => {
        request
            .get('/books')
            .expect(200)
            .expect(response => {
                const result = response.body;
                expect(result).toHaveLength(2);
                expect(result[0]).toStrictEqual(books[0]);
                expect(result[1]).toStrictEqual(books[1]);
            })
            .end(done);
    });

    it('Get API promise way', async () => {
        const response = await request
            .get('/books')
            .expect(200);

        const result = response.body;
        expect(result).toHaveLength(2);
        expect(result[0]).toStrictEqual(books[0]);
        expect(result[1]).toStrictEqual(books[1]);
    });

    describe('Post API', () => {

        it('Should return 200', () => {
            request
                .post('/books')
                .send({
                    "isbn": "918128121888",
                    "title": "Wimpy kid"
                })
                .expect(200)
                .expect(response => {
                    expect(response.text).toBe('Book is added to the database');
                    server.close();
                });
            
        });

        it('Should return 400', async () => {
            const response = await request
                .post('/books')
                .expect(400);
            expect(response.body.message).toBe('Bad Request');
        });
    });

    
    
    describe('Delete API', () => {
        it('Should return 200', () => {
            request
                .delete('/books/65557567')
                .expect(200)
                .expect(response => {
                    expect(response.text).toBe('Successfully deleted');
                });
        });

        it('Should return 404', () => {
            request
                .delete('/books/123123123123')
                .expect(404)
                .expect(response => {
                    expect(response.body.message).toBe('book with isbn 123123123123 was not found');
                });
        });
    });
});