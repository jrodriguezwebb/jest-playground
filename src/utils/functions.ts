/* eslint-disable @typescript-eslint/no-explicit-any */

export const functions = {
    sum: (a: number, b: number) => {
        return a + b;
    },
    sub: (a: number, b: number) => {
        return a - b;
    },
    copyArray: (array: any[]) => {
        return [ ...array ];
    }
}
