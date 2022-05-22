import { verifyNeighbours, randomArray, dropCanvas, asteroidMode } from "./functions.js";

const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
const canvasWidth = 800;
const canvasHeight = 800;

const reloadButton = document.querySelector("#reload");
const asteroidButton = document.querySelector("#asteroid");
const emoji = document.querySelector("#emoji");
let array;
let normalTime;

const game = () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    array = randomArray();

    dropCanvas(ctx, canvas);

    normalTime = setInterval(() => {
        array = verifyNeighbours(array, ctx);

    }, 10);

    reloadButton.addEventListener("click", () => {
        clearInterval(normalTime);
        asteroidButton.style.display = "initial";
        game();
    });
    asteroidButton.addEventListener("click", () => {
        clearInterval(normalTime);
        asteroid(emoji);
    });
};

const asteroid = (emoji) => {
    asteroidButton.style.display = "none";
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    array = randomArray();

    dropCanvas(ctx, canvas);

    normalTime = setInterval(() => {
        array = asteroidMode(array, ctx);
        clearInterval(normalTime);
    }, 10);
    
};


// IIFE
(() => {
    document.addEventListener("DOMContentLoaded", game);
})();
