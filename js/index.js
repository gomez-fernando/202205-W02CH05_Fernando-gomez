import { verifyNeighbours } from "./functions.js";
import { randomArray } from "./functions.js";
import { dropCanvas } from "./functions.js";
// import { drawPlanet } from "./functions.js";

let canvas = document.querySelector('#canvas');
// let fps = 50;
let canvasWidth = 800;
let canvasHeight = 800;
// let tileWidth;
// let tileHeight;
// let planet;
// let rows = 100;
// let columns = 100;
// let tileWidth = canvasWidth / columns;
// let tileHeight = canvasHeight / rows;




const game = () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    

    

    // let goOn = true;
    let array = randomArray();

    dropCanvas();
    // drawPlanet(array);

    setInterval(() => {
        array =  verifyNeighbours(array);
        console.log(array);
    }, 500 );

}

// const main = () => {
//     dropCanvas();
//     drawPlanet();
// }


// IIFE
(() => {
    document.addEventListener('DOMContentLoaded', game);
})();




// game();

