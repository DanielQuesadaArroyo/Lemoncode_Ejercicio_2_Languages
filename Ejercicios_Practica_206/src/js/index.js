const getPlayersOrder = (players, turns) => {

    for (let i = 0; i < turns; i++) {
        let [first, ...rest] = players;
        players = [...rest, first];
    }
    return players;
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]