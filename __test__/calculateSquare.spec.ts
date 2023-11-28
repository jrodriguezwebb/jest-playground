import { calculateSquareAsync, calculateSquare } from  '../src/utils/calculateSquare';

describe('calculateSquare', () => {
    it('Should return expected result if oassed a valid input', (done) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        calculateSquareAsync(2, (error: any, result: number) => {
            expect(result).toBe(4);
            done();
        })
    });

    it('Should return expected error due a type mismatch', (done) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        calculateSquareAsync('string', (error: any) => {
            expect(error).not.toBeNull();
            expect(error.message).toBe("Argument of type is expected");
            done();
        })
    });

    it('Should calculate the square of a number', () => {
        expect(calculateSquare(5)).toBe(25);
    });

    it('Should throw an error if it is undefined', () => {
        expect(() => calculateSquare()).toThrow('You must provide a number');
    });

    it('Should throw an error if is not a number', () => {
        expect(() => calculateSquare('xyz')).toThrow('You must provide a number');
    });
})