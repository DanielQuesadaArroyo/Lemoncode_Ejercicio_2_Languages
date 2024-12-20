var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

function isEqual(a, b) {
    let isEqual = true;
    for (let key of Object.keys(a)) {
        if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
            isEqual = false;
        }
    }

    return isEqual;
}

console.log("RESULTADO 1: " + isEqual(user, clonedUser)); // true



var newUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};
var newClonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};

function isDeepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

console.log("RESULTADO 2: " + isDeepEqual(newUser, newClonedUser)); // true