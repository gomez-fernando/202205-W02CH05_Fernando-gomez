let cellsArray = [];

cellsArray = [
    [0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 0],
];

// console.log(cellsArray);

for (let i = 0; i < cellsArray.length; i++) {
    const element = cellsArray[i];
    console.log("Estoy en array: " + i);
    // console.log(element);
    for (let j = 0; j < cellsArray[i].length; j++) {
        let vecinosVivos = 0;
        
        const element2 = cellsArray[i][j];
        console.log(element2);

        //  arriba izquierda
        if (i > 0 && j - 1 >= 0) {
            if (cellsArray[i - 1][j - 1] === 1) {
                console.log("vecino arriba izquierda vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }
        }

         //  arriba
         if (i > 0 ) {
            if (cellsArray[i - 1][j] === 1) {
                console.log("vecino  arriba vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }
        }

        //  arriba derecha
        if (i > 0 && j + 1 < cellsArray.length) {
            if (cellsArray[i - 1][j + 1] === 1) {
                console.log("vecino arriba derecha vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }
        }

        // anterior --------------
        if (cellsArray[i][j - 1] === 1) {
            console.log("vecino anterior vivo");
            vecinosVivos++;
            console.log("contador: " + vecinosVivos);
        }

        // siguiente -----------------
        if (cellsArray[i][j + 1] === 1) {
            console.log("vecino siguiente vivo");
            vecinosVivos++;
            console.log("contador: " + vecinosVivos);
        }

        //  debajo izquierda
        if (i < cellsArray.length - 1 && j - 1 >= 0) {
            if (cellsArray[i + 1][j - 1] === 1) {
                console.log("vecino debajo izquierda vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }
        }

        //  debajo
         if (i < cellsArray.length - 1) {
            if (cellsArray[i + 1][j] === 1) {
                console.log("vecino  debajo vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }
        }

        //  debajo derecha
        if (i < cellsArray.length - 1 && j < cellsArray.length) {
            if (cellsArray[i + 1][j + 1] === 1) {
                console.log("vecino debajo derecha vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }
        }
    }
    console.log("--------------------");
}
