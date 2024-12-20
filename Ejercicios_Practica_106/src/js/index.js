function init() {

    let arrayDados = [null, null];

    function tirarDados() {
        console.log("Vamos a tirar los dados. Muchas suerte.")
        arrayDados.forEach((element, index) => {
            arrayDados[index] = Math.floor(Math.random() * 6) + 1;
        });
    }

    function obtenerPremio() {
        premio = true;
        arrayDados.forEach((element) => {
            if (element != 6) premio = false;
        });

        console.log(premio === true ? "Ha sacado doble seis. Tiene premio." : "No ha obtenido premio.")
    }

    tirarDados();
    obtenerPremio();
    return arrayDados;
}


console.log("RESULTADO: " + init());