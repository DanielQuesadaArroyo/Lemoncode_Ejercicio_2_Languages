
const biggestWord = (phrase) => {

    let words = phrase.split(" ");
    let word = "";

    words.forEach((currElement) => {
        if (currElement.length > word.length) {
            word = currElement;
        }
    });

    return word;
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
