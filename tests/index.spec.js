import { verifyNeighbours, randomArray, verify } from "../js/functions.js";

describe("Given function verify", () => {
    describe("When cell has 3 alive neighbours", () => {
        test("should return 3", () => {
            // arrange
            let vecinosVivos = 0;
            const cellsArray = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const expectedResult = 3;
            // act
            const result = verify(cellsArray, 1, 0, vecinosVivos);
            // assert
            expect(result).toBe(expectedResult);
        });
    });
});
describe("Given function randomArray", () => {
    describe("No parameters needed", () => {
        test("should return a new random array", () => {
            // arrange

            // act
            const result = Array.isArray(randomArray());
            const expectedResult = true;
            // assert
            expect(result).toBe(expectedResult);
        });
    });
});
