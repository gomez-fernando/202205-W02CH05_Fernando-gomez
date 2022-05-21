export const randomArray = () => {
    console.log("*/**/*/*/");
    let array = [...Array(5)].map(x => Array(5).fill(1));
    console.log(array);

    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){
            array[i][j] = (Math.floor(Math.random() *2));
        }
    }
    console.log(array);
    return array;
}

export const verifyNeighbours = (array) => {
    let newArray =  [...array].map((row) => [...row]);
    for (let i = 0; i < array.length; i++) {
        console.log("Estoy en array: " + i);
        for (let j = 0; j < array[i].length; j++) {
            let vecinosVivos = 0;
            console.log("///////////");
            console.log("cell --> Estado: " + array[i][j]);

            //  arriba izquierda
            if (i > 0 && j - 1 >= 0) {
                if (array[i - 1][j - 1] === 1) {
                    console.log("vecino arriba izquierda vivo");
                    vecinosVivos++;
                    console.log("contador: " + vecinosVivos);
                }
            }

            //  arriba
            if (i > 0) {
                if (array[i - 1][j] === 1) {
                    console.log("vecino  arriba vivo");
                    vecinosVivos++;
                    console.log("contador: " + vecinosVivos);
                }
            }

            //  arriba derecha
            if (i > 0 && j + 1 < array.length) {
                if (array[i - 1][j + 1] === 1) {
                    console.log("vecino arriba derecha vivo");
                    vecinosVivos++;
                    console.log("contador: " + vecinosVivos);
                }
            }

            // anterior --------------
            if (array[i][j - 1] === 1) {
                console.log("vecino anterior vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }

            // siguiente -----------------
            if (array[i][j + 1] === 1) {
                console.log("vecino siguiente vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }

            //  debajo izquierda
            if (i < array.length - 1 && j - 1 >= 0) {
                if (array[i + 1][j - 1] === 1) {
                    console.log("vecino debajo izquierda vivo");
                    vecinosVivos++;
                    console.log("contador: " + vecinosVivos);
                }
            }

            //  debajo
            if (i < array.length - 1) {
                if (array[i + 1][j] === 1) {
                    console.log("vecino  debajo vivo");
                    vecinosVivos++;
                    console.log("contador: " + vecinosVivos);
                }
            }

            //  debajo derecha
            if (i < array.length - 1 && j < array.length) {
                if (array[i + 1][j + 1] === 1) {
                    console.log("vecino debajo derecha vivo");
                    vecinosVivos++;
                    console.log("contador: " + vecinosVivos);
                }
            }

            console.log("Coordenadas: x = " + i + " -> y= " + j);
            console.log("total de vecinos vivos: " + vecinosVivos);

            // chage state of cell
            if (array[i][j] === 1) {
                console.log("Mi estado es: " + array[i][j]);
                if (vecinosVivos < 2 || vecinosVivos > 3) {
                    console.log("Muere");
                    newArray[i][j] = 0;
                } else {
                    console.log("Sobrevive");
                    newArray[i][j] = 1;
                }
            } else {
                console.log("Mi estado es: " + array[i][j]);
                if (vecinosVivos === 3) {
                    newArray[i][j] = 1;
                    console.log("Renace");
                } else {
                    newArray[i][j] = 0;
                    console.log("No renace");
                }
            }
        }
        console.log("--------------------");
    }

    console.log(array);
    console.log(newArray);
    return newArray;
};