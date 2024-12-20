class Reminder {

    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        var self = this;

        setTimeout(function () {
            console.log(`Your reminder after ${delay} seconds is: ${self.text}`);
        }, delay * 1000);
    }
}

let r = new Reminder("Hola");
r.remindMe(1);

// SetTimeOut es un método de window y por tanto el this difiere del this con el que hemos llamado a la 
// funcion remindMe. Una solución es guardar el this de la función y usarlo dentro del setTimeout.