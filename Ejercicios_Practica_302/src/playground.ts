interface Student {
  name: string;
  surname: string;
  age: string;
}

const set = (student: Student, prop: keyof Student, value: string): Student => {
  let nuevo: Student = { ...student };
  nuevo[prop] = value;

  return nuevo;
};

const julia = { name: "Julia", surname: "Álvarez", age: "19" };
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false
