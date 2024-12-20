function f(input = "Unknown") {
    return (input === null) ? "" : input;
}

console.log(f(undefined));
console.log(f(null));
console.log(f('Hola mundo!'));