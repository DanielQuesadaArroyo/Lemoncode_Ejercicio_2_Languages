function showPrimes(from, to) {

  let array = [];
  console.log("from: " + from);
  console.log("to: " + to);


  for (let i = from, k = to; i <= k; i++) {
    if (esPrimo(i)) {
      console.log("El número " + i + " es primo");
      array.push(i);
    };
  }
}

function esPrimo(num) {
  for (i = 2; i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}


console.log(showPrimes(1, 10))