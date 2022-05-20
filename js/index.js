let cellsArray = [];

cellsArray = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
];

// console.log(cellsArray);

for (let i = 0; i < cellsArray.length; i++) {
    const element = cellsArray[i];
    // console.log(element);
    for (let j = 0; j < cellsArray[i].length; j++) {
        let vecinosVivos = 0;
        const element2 = cellsArray[i][j];
        console.log(element2);

        console.log("Estoy en el array: " + i);

        // anterior arriba
        if (cellsArray[i] > 0 && cellsArray[i][j - 1] >= 0) {
            if (cellsArray[i - 1][j - 1] === 1) {
                console.log("vecino anterior arriba vivo");
                vecinosVivos++;
                console.log("contador: " + vecinosVivos);
            }
        }

         // anterior encima
         if (cellsArray[i] >=1 ) {
            console.log("if del problema");

            if (cellsArray[i - 1][j] === 1) {
                console.log("if del problema");
                console.log("vecino anterior encima vivo");
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
    }
    console.log("--------------------");
}
