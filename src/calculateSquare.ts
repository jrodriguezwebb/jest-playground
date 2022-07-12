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

export function calculateSquare(number: number) {
    const result = number * number;
}

// module.exports.calculateSquareAsync = calculateSquareAsync;
// module.exports.calculateSquare = calculateSquare;