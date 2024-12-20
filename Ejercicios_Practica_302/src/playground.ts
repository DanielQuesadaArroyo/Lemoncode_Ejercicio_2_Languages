interface Student {
  name: string;
  surname: string;
  age: number;
}

const set = <O extends Student, K extends keyof O>(
  student: O,
  prop: K,
  value: (typeof student)[K]
): O => {
  let nuevo: O = { ...student };
  nuevo[prop] = value;

  return nuevo;
};

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false
