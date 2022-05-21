import { verifyNeighbours } from "./functions.js";
import { randomArray } from "./functions.js";

let array = [];

// array = [
//     [0, 1, 0, 0, 1],
//     [1, 1, 0, 0, 0],
//     [0, 1, 1, 1, 0],
//     [0, 1, 0, 1, 0],
//     [1, 1, 1, 1, 0],
// ];

const game = () => {
    array = randomArray();



    return verifyNeighbours(array);
}

game();

// randomArray();