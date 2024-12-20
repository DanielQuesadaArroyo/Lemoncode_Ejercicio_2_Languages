console.log("1. Array operations: Head")

const head = (array) => {
  let [first] = array;
  return first;
};


console.log("RESULTADO Head: " + head(["1", "2", "3"]));

console.log("2. Array operations: Tail")

const tail = (array) => {
  let [first, ...rest] = array;
  return rest;
};


console.log("RESULTADO Tail: " + tail(["1", "2", "3"]));


console.log("3. Array operations: Init")

const init = (array) => {
  return array.slice(0, array.length - 1);
};


console.log("RESULTADO Init: " + init(["1", "2", "3"]));


console.log("4. Array operations: Last")

const last = (array) => {
  return [...array].pop();
};


console.log("RESULTADO Last: " + last(["1", "2", "3"]));
