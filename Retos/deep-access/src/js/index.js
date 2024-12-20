// const myObject = {
//     a: 1,
//     b: {
//         c: null,
//         d: {
//             e: 3,
//             f: {
//                 g: "bingo",
//             }
//         }
//     }
// };

const deepGet = (obj, ...args) => {

    for (let arg of args) {
        obj.hasOwnProperty(arg) ? obj = obj[arg] : obj = undefined;
    }

    return obj;

}

// console.log(deepGet(myObject, "x")); // undefined
// console.log(deepGet(myObject, "a")); // 1
// console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
// console.log(deepGet(myObject, "b", "c")); // null
// console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
// console.log(deepGet(myObject));  // {a: 1, b: {...}}


const myObject = { a: 1 };

const deepSet = (val, obj, ...args) => {

    let o = Object.create(obj);
    console.log(o);

    for (let arg of args) {
        if (o.hasOwnProperty(arg)) {
            obj = obj[arg];
        };
    }

}


deepSet(1, myObject, "a", "b");
//console.log(JSON.stringify(myObject));  // {a: { b: 1}}
// deepSet(2, myObject, "a", "c");
// console.log(JSON.stringify(myObject));  // {a: { b: 1, c: 2}}
// deepSet(3, myObject, "a");
// console.log(JSON.stringify(myObject));  // {a: 3}
// deepSet(4, myObject);
// console.log(JSON.stringify(myObject));  // Do nothing // {a: 3}
