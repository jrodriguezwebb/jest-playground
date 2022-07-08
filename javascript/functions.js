
const functions = {
    sum: (a, b) => {
        return a + b;
    },
    sub: (a, b) => {
        return a - b;
    },
    copyArray: (array) => {
        return [ ...array ];
    }
}

module.exports = functions