const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
};

const memoize = (f) => {

    const memo = new Map();

    return function () {
        return memo.has(f.name) ? memo.get(f.name) : memo.set(f.name, f());
    };
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415  