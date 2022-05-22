import { verifyNeighbours, randomArray, dropCanvas } from "./functions.js";

const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
const canvasWidth = 800;
const canvasHeight = 800;

const reloadButton = document.querySelector("#reload");
let array;
let normalTime;

const game = () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    array = randomArray();

    dropCanvas(ctx, canvas);

    normalTime = setInterval(() => {
        array = verifyNeighbours(array, ctx);
        // console.log(array);

        reloadButton.addEventListener("click", () => {
            clearInterval(normalTime);
            game();
        });
    }, 10);
};

// IIFE
(() => {
    document.addEventListener("DOMContentLoaded", game);
})();
