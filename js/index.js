import { verifyNeighbours } from "./functions.js";
import { randomArray } from "./functions.js";
import { dropCanvas } from "./functions.js";

let canvas = document.querySelector('#canvas');
let canvasWidth = 800;
let canvasHeight = 800;


const game = () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let array = randomArray();

    dropCanvas();

    setInterval(() => {
        array =  verifyNeighbours(array);
        console.log(array);
    }, 10 );

}

// IIFE
(() => {
    document.addEventListener('DOMContentLoaded', game);
})();





