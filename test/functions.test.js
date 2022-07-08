const functions = require('../javascript/functions');
describe('Sum function', () => {
    it('Expects result of the summarized numbers', () =>{
        expect(functions.sum(5,5)).toBe(10)
    })
});

describe('Sub function', () => {
    it('Expects result of the substracted numbers', () =>{
        expect(functions.sub(5,5)).toBe(0)
    })
});

describe('cloneArray function', () => {
    let mockArray = [ 1, 2, 3, 4, 5 ];
    it('Expects result of the summarized numbers', () =>{
        expect(functions.copyArray(mockArray)).toEqual(mockArray)
    })
});
