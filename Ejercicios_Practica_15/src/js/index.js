function zipObject(keys = [], values = []) {
  let result = {};


  const a = keys.map((element, index) => {
    result[element] = values[index];
  })

  return result;
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}