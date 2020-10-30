// creo la libreria con diverse funzioni

const add = (x,y) => x +y;
const PI = 3.14159;
const square = x => x * x;

// per esportare le funzioni e renderle utilizzabili
// devo specificarlo:
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// un modo più veloce per farlo:
const math = {
    add: add,
    PI: PI,
    square: square,
}

module.exports = math;
