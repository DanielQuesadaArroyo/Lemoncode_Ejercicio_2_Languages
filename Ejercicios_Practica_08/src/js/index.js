function includes(array, value) {
  for (let val of array) {
    if (value === val) {
      return true;
    }
  }

  return false;
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false


function includesIndexOf(array, value) {
  return (array.indexOf(value) != -1 ? true : false);
}

// Ejemplo:
console.log(includesIndexOf([1, 2, 3], 3)); // true
console.log(includesIndexOf([1, 2, 3], 0)); // false