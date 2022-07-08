const calculateSquare = require('../javascript/calculateSquare');
describe('calculateSquare', () => {
    it('Should return expected result if oassed a valid input', (done) => {
        calculateSquare(2, (error, result) => {
            expect(result).toBe(4);
            done();
        })
    });

    it('Should return expected error due a type mismatch', (done) => {
        calculateSquare('string', (error, result) => {
            expect(error).not.toBeNull();
            expect(error.message).toBe("Argument of type is expected");
            done();
        })
    });
})