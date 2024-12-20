/** Inicio. 1. Array operations: Head*/
console.log("1. Array operations: Head")

const head = (array) => {
  let [first] = array;
  return first;
};


console.log("RESULTADO Head: " + head(["1", "2", "3"]));

/** Fin. 1. Array operations. Head */

/** Inicio. 2. Array operations: Tail */

console.log("2. Array operations: Tail")

const tail = (array) => {
  let [first, ...rest] = array;
  return rest;
};


console.log("RESULTADO Tail: " + tail(["1", "2", "3"]));
/** Fin. 2. Array operations. Tail */

/** Inicio. 3. Array operations: Init */

console.log("3. Array operations: Init")

const init = (array) => {
  return array.slice(0, array.length - 1);
};


console.log("RESULTADO Init: " + init(["1", "2", "3"]));
/** Fin. 3. Array operations. Init */

/** Inicio. 4. Array operations: Last */

console.log("4. Array operations: Last")

const last = (array) => {
  return [...array].pop();
};

let arr = ["1", "2", "3"];
console.log("RESULTADO Last: " + last(arr));
/** Fin. 4. Array operations. Last */

/** Inicio. 2. Concat */

console.log("2. Concat")

const concatenar = (a, b) => {
  return [...a, ...b];
};

console.log("RESULTADO Concat: " + concatenar(["1", "2", "3"], ["4", "5", "6"]));
/** Fin. 2. Concat */

/** Inicio. 2. Concat: Opcional */

console.log("2. Concat. Opcional")

const opcional = (...args) => {
  let array = [];
  for (let arg of args) {
    array += (array.length == 0) ? [...arg] : "," + [...arg];
  }
  return array;
};

console.log("RESULTADO Concat. Opcional: " + opcional(["1", "2", "3"], ["4", "5", "6"], ["1", "2", "3"], ["4", "5", "6"]));
/** Fin. 2. Concat: Opcional */

/** Inicio. 3. Clone Merge. Clone */

console.log("3. Clone Merge. Clone")

function clone(source) {
  return { ...source };
}

console.log("RESULTADO Clone Merge. Clone " + JSON.stringify(clone({ name: "Maria", surname: "Ibañez", country: "SPA" })));
/** Fin. 3. Clone Merge. Clone */


/** Inicio. 3. Clone Merge. Merge */

console.log("3. Clone Merge. Merge")

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  return { ...target, ...source };
}

console.log(merge(a, b));
/** Fin. 3. Clone Merge. Merge */

/** Inicio. 3. Clone Merge. Merge */

console.log("3. Clone Merge. Merge")

const objectA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objectB = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  return { ...target, ...source };
}

console.log(merge(objectA, objectB));
/** Fin. 3. Clone Merge. Merge */


/** Inicio. 4. Read Books. */

function isBookRead(books, titleToSearch) {
  const book = books.find(({ title }) => title === titleToSearch);

  return (book?.isRead) ? book.isRead : false;
}

var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

/** Fin. 4. Read Books. */

/** Inicio. 5. Slot Machine */
class SlothMachine {

  constructor() {
    this.monedas = 10;
  }

  get monedas() {
    return this._monedas;
  }

  set monedas(value) {
    this._monedas = value;
  }

  recargarMonedero(monedas) {
    console.log(`Recargamos el monedero con ${monedas} monedas. Tiene un total de ${this.monedas + monedas} monedas.`);
    this.monedas += monedas;
  }

  consumirMoneda() {
    this.monedas -= 1;
    console.log(`Echamos una moneda. Nuestro monedero tiene ${this.monedas} monedas`);
  }

  play() {
    if (this.monedas === 0) this.recargarMonedero(10);

    this.consumirMoneda();

    if (this.tirada() && this.tirada() && this.tirada()) {
      this.ganar();
    } else {
      console.log("Good luck next time!!");
    }
  }

  tirada() {
    const t = Math.random() >= 0.5;
    console.log(t);
    return t;
  }

  ganar() {
    const min = 1;
    const max = 5;
    let premio = Math.round(Math.random() * (max - min) + min);
    console.log(`Congratulations!!!.You won ${premio} coins!`)
    this.recargarMonedero(premio);
    return premio;
  }
}


const machine1 = new SlothMachine();


machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

/** Fin. 5. Slot Machine */