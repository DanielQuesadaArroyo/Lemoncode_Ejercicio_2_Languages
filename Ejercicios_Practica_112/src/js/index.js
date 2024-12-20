function subsets(word) {
  let array = [];

  for (let i = 1; i < word.length; i++) {
    array.push(word.substring(i));
  }

  return array;
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
