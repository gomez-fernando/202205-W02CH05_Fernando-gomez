import { verifyNeighbours } from "./functions.js";
import { randomArray } from "./functions.js";
import { newGen } from "./functions.js";

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let fps = 50;
let canvasWidth = 530;
let canvasHeight = 500;
let tileWidth;
let tileHeight;
let planet;
let rows = 100;
let columns = 100;
let background = '#000000';
let cellColor = 'green';

let array = [];

const game = () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    tileWidth = canvasWidth / columns;
    tileHeight = canvasHeight / rows;

    // let goOn = true;
    array = randomArray();

    setInterval(() => {
        array =  verifyNeighbours(array);
        console.log(array);
    }, 2000 / fps);

}


// IIFE
(() => {
    document.addEventListener('DOMContentLoaded', game);
})();




// game();

