
let ctx = canvas.getContext('2d');
let rows = 100;
let columns = 100;
let background = '#000000';
let cellColor = 'green';


let canvasWidth = 800;
let canvasHeight = 800;
// let tileWidth;
// let tileHeight;
// let planet;
let tileWidth = canvasWidth / columns;
let tileHeight = canvasHeight / rows;

export const randomArray = () => {
    let array = [...Array(100)].map(x => Array(100).fill(1));

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

            // drawPlanet(newArray);
            const drawCell = (i, j) => {
                let color = '';
                if (array[i][j] === 1){
                    color = cellColor;
                } else{
                    color = background;
                }
            
                ctx.fillStyle = color;
                ctx.fillRect(i * tileWidth, j * tileHeight, tileWidth, tileHeight);
            }
            drawCell(i,j);
             const drawPlanet = (array) => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        drawCell(array[i][j]);
                    }
                    
                }
            }
        }
    }

    return newArray;
};

// export const newGen = ( array) => {
//     setInterval(() => {
//         array =  verifyNeighbours(array);
//         console.log(array);
//     }, 3000);
// } 

export const dropCanvas = () => {
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}



