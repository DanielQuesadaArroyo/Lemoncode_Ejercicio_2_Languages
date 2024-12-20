const x = Object.isNaN;

//console.log(x === x); // false

const isNaNValue = v => isNaN(v);

//console.log(isNaNValue(NaN)); // true


// ¿x? <= Debes ingeniar un "x" que provoque lo siguiente:
console.log("X: " + (!isNaNValue(x))); // true
console.log("Y: " + (x !== x)); // true
console.log(!isNaNValue(x) && x !== x); // true 