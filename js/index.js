import { verifyNeighbours } from "./functions.js";
import { randomArray } from "./functions.js";
import { dropCanvas } from "./functions.js";

let canvas = document.querySelector('#canvas');
let canvasWidth = 800;
let canvasHeight = 800;

let reloadButton = document.querySelector('#reload');
let array;
let normalTime;

const game = () => {
   
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    array = randomArray();

    dropCanvas();

    normalTime = setInterval(() => {
        array =  verifyNeighbours(array);
        console.log(array);

        reloadButton.addEventListener('click', () => {
            array = [];
                
            game();
        });


        
    }, 10 );

   


    
    

    
        

}



// IIFE
(() => {
    document.addEventListener('DOMContentLoaded', game);
})();





