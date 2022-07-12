import sum from '../src/sum';

test('Expects result of the summarized numbers', () =>{
    expect(sum(5,5)).toBe(10)
})