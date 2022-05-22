let rows = 400;
let columns = 400;
let background = '#000000';
let cellColor = 'green';
let cellColor2 = 'yellow';
let canvasWidth = 800;
let canvasHeight = 800;
let tileWidth = canvasWidth / columns;
let tileHeight = canvasHeight / rows;

export const randomArray = () => {
    let array = [...Array(400)].map(_x => Array(400).fill(1));

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            array[i][j] = (Math.floor(Math.random() *2));
        }
    }
    return array;
}

export const verifyNeighbours = (array, ctx) => {
    emoji.classList.remove("d-initial");
    emoji.classList.add("d-none");
    
    let newArray =  [...array].map((row) => [...row]);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let vecinosVivos = 0;

            // verify how many neighbours are alive
            vecinosVivos = verify(array, i, j, vecinosVivos);
            // chage state of cell
            changeCellState(array, newArray, i, j, vecinosVivos)
            
            drawCell(array[i][j], i, j, ctx);
        }
    }

    return newArray;
};

export const asteroidMode = (array, ctx) => {
    
    let newArray =  [...array].map((row) => [...row]);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let vecinosVivos = 0;

            // verify how many neighbours are alive
            vecinosVivos = verify(array, i, j, vecinosVivos);
            // chage state of cell
            changeCellStateAsteroidMode(array, newArray, i, j)
            
            drawCell(array[i][j], i, j, ctx);
        }
    }

    setTimeout(() => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                drawCellAsteroideMode(array[i][j], i, j, ctx);
            }
        }
        setTimeout(() => {
            emoji.classList.remove("d-none");
            emoji.classList.add("d-initial");
        }, 2500);
    }, 2500);

    return newArray;
};

export const verify = (array, i, j, vecinosVivos) => {
    if (i > 0) {
    //  arriba izquierda
        if (array[i - 1][j - 1] === 1 && j - 1 >= 0) {
            vecinosVivos++;
        }

    //  arriba
        if (array[i - 1][j] === 1) {
            vecinosVivos++;
        }

    //  arriba derecha
        if (array[i - 1][j + 1] === 1 && j + 1 < array.length) {
            vecinosVivos++;
        }
    }

    // anterior 
    if (array[i][j - 1] === 1) {
        vecinosVivos++;
    }

    // siguiente 
    if (array[i][j + 1] === 1) {
        vecinosVivos++;
    }

    if (i < array.length - 1) {

    //  debajo izquierda
        if (array[i + 1][j - 1] === 1 && j - 1 >= 0) {
            vecinosVivos++;
        }

    //  debajo
        if (array[i + 1][j] === 1) {
            vecinosVivos++;
        }

    //  debajo derecha
        if (array[i + 1][j + 1] === 1 && j < array.length) {
            vecinosVivos++;
        }
    }

    return vecinosVivos;
}

export const changeCellState = (array, newArray, i, j, vecinosVivos) =>{
    if (array[i][j] === 1) {
        if (vecinosVivos < 2 || vecinosVivos > 3) {
            newArray[i][j] = 0;
        } else {
            newArray[i][j] = 1;
        }
    } else {
        if (vecinosVivos === 3) {
            newArray[i][j] = 1;
        } else {
            newArray[i][j] = 0;
        }
    }
    return newArray[i][j]
}
export const changeCellStateAsteroidMode = (array, newArray, i, j) =>{
    return newArray[i][j]
}

const drawCell = (cell, i, j, ctx) => {
    let color = '';
    if (cell === 1){
        let col = (Math.floor(Math.random() *2));
        (col === 1) ? color = cellColor : color = cellColor2;
    } else{
        color = background;
    }

    ctx.fillStyle = color;
    ctx.fillRect(i * tileWidth, j * tileHeight, tileWidth, tileHeight);
}

const drawCellAsteroideMode = (_cell, i, j, ctx) => {
    ctx.fillStyle = 'black';
    ctx.fillRect(i * tileWidth, j * tileHeight, tileWidth, tileHeight);
}

export const dropCanvas = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}



