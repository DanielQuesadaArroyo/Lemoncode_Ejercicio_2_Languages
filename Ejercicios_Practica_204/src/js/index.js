var a = 1;
let b = 3;

{
  try {
    console.log(a, b);
  } catch (error) { }

  let b = 3;
  console.log(a, b);
}

console.log(a, b);

const f = (a) => {
  console.log(a);
  var a = 5;
  let b = 6;
  console.log(a, b);
};

b = 2;
console.log(a, b);
f(5);
console.log(a, b);;