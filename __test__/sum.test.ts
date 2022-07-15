import sum from '../src/utils/sum';

test('Expects result of the summarized numbers', () =>{
    expect(sum(5,5)).toBe(10)
})