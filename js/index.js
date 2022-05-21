import { verifyNeighbours } from "./functions.js";
import { randomArray } from "./functions.js";
import { newGen } from "./functions.js";

let array = [];

const game = () => {
    let goOn = true;
    array = randomArray();

    setInterval(() => {
        array =  verifyNeighbours(array);
        console.log(array);
    }, 3000);

}

game();

