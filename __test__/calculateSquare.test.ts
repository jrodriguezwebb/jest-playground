//const calculateSquare = require('../javascript/calculateSquare');
import { calculateSquareAsync } from  '../src/calculateSquare';

describe('calculateSquare', () => {
    it('Should return expected result if oassed a valid input', (done) => {
        calculateSquareAsync(2, (error: any, result: number) => {
            expect(result).toBe(4);
            done();
        })
    });

    it('Should return expected error due a type mismatch', (done) => {
        calculateSquareAsync('string', (error: any, result: number) => {
            expect(error).not.toBeNull();
            expect(error.message).toBe("Argument of type is expected");
            done();
        })
    });
})