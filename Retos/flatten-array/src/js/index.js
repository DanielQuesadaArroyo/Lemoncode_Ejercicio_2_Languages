const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const textoPlano = (data) => {
    return data.toString().split(",").map((value) => Number(value));
}

console.log(textoPlano(sample));