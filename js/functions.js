let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
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

export const verifyNeighbours = (array) => {
    
    let newArray =  [...array].map((row) => [...row]);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let vecinosVivos = 0;

            //  arriba izquierda
            if (i > 0 && j - 1 >= 0) {
                if (array[i - 1][j - 1] === 1) {
                    vecinosVivos++;
                }
            }

            //  arriba
            if (i > 0) {
                if (array[i - 1][j] === 1) {
                    vecinosVivos++;
                }
            }

            //  arriba derecha
            if (i > 0 && j + 1 < array.length) {
                if (array[i - 1][j + 1] === 1) {
                    vecinosVivos++;
                }
            }

            // anterior --------------
            if (array[i][j - 1] === 1) {
                vecinosVivos++;
            }

            // siguiente -----------------
            if (array[i][j + 1] === 1) {
                vecinosVivos++;
            }

            //  debajo izquierda
            if (i < array.length - 1 && j - 1 >= 0) {
                if (array[i + 1][j - 1] === 1) {
                    vecinosVivos++;
                }
            }

            //  debajo
            if (i < array.length - 1) {
                if (array[i + 1][j] === 1) {
                    vecinosVivos++;
                }
            }

            //  debajo derecha
            if (i < array.length - 1 && j < array.length) {
                if (array[i + 1][j + 1] === 1) {
                    vecinosVivos++;
                }
            }

            // chage state of cell
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

            const drawCell = () => {
                let color = '';
                if (array[i][j] === 1){
                    let col = (Math.floor(Math.random() *2));
                    (col === 1) ? color = cellColor : color = cellColor2;
                    // color = cellColor;
                } else{
                    color = background;
                }
            
                ctx.fillStyle = color;
                ctx.fillRect(i * tileWidth, j * tileHeight, tileWidth, tileHeight);
            }
            drawCell();
            (array) => {
                for ( i = 0; i < rows; i++) {
                    for ( j = 0; j < columns; j++) {
                        drawCell(array[i][j]);
                    }
                    
                }
            }
        }
    }

    return newArray;
};

export const dropCanvas = () => {
    // canvas.width = canvas.width;
    // canvas.height = canvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}



