
console.log("1. Concat")

const concat = (a, b) => {
  return [...a, ...b];
};

console.log("RESULTADO Concat: " + concat(["1", "2", "3"], ["4", "5", "6"]));


console.log("2. concatMulti")

const concatMulti = (...args) => {
  let array = [];
  for (let arg of args) {
    array = array.concat(arg);
  }
  return array;
};

console.log("RESULTADO Concat. Opcional: " + concatMulti(["1", "2", "3"], ["4", "5", "6"], ["1", "2", "3"], ["4", "5", "6"]));