import { cloneArray } from '../src/cloneArray';

let mockArray = [ 1, 2, 3, 4, 5 ];
test('Expects result of the summarized numbers', () =>{
    expect(cloneArray(mockArray)).toEqual(mockArray)
})