const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const notas = {
    0: "Muy deficiente",
    1: "Muy deficiente",
    2: "Muy deficiente",
    3: "Muy deficiente",
    4: "Insuficiente",
    5: "Suficiente",
    6: "Bien",
    7: "Notable",
    8: "Notable",
    9: "Sobresaliente",
    10: "Matrícula de Honor"
};

function printAverage() {
    const notaMedia = getValues(eso2o);
    console.log("La nota media de la clase es " + notaMedia + " que es un " + notas[Math.trunc(notaMedia)]);
}

function getValues(obj) {
    let sum = 0;
    const values = Object.values(obj);

    for (let value of values) {
        sum += value;
    }

    return sum / values.length;
}

printAverage();