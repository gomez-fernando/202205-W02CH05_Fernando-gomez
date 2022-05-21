export const randomArray = () => {
    let array = [...Array(5)].map(x => Array(5).fill(1));

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
        }
    }

    return newArray;
};

export const newGen = ( array) => {
    setInterval(() => {
        array =  verifyNeighbours(array);
        console.log(array);
    }, 3000);
} 