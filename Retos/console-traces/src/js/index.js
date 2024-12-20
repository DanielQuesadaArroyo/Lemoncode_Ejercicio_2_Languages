const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};

const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"]),
];

const run = async triggers => {

    let i = 0;

    for (let trigger of triggers) {
        setTimeout(() => {
            trigger();
        }, 100 * i);

        i++;
    }
    showMessage([100 * (i + 1), "first"])
};

run(triggers);