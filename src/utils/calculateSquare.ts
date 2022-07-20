/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-types
export function calculateSquareAsync(number: any, callback: Function) {
    setTimeout(() => {
        if(typeof number !== 'number') {
            callback(new Error("Argument of type is expected"));
            return;
        }

        const result = number * number;
        callback(null, result);
    }, 200);
}

export function calculateSquare(number?: any) {
    if(number === undefined || typeof number !== 'number') {
        throw new Error('You must provide a number');
    }
    return number * number;
}
