import { randomArray, verify, changeCellState } from "../js/functions.js";

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
describe("Given function changeCellState", () => {
    describe("When an alive or death cell has 3 alive neighbours", () => {
        test("should return 1", () => {
            // arrange
            let vecinosVivos = 3;
            const array = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const newArray = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const expectedResult = 1;
            // act
            const result = changeCellState(array, newArray, 3, 4,vecinosVivos);
            // assert
            expect(result).toBe(expectedResult);
        });
    });
    describe("When an alive cell has 2 alive neighbours", () => {
        test("should return 1", () => {
            // arrange
            let vecinosVivos = 2;
            const array = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const newArray = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const expectedResult = 1;
            // act
            const result = changeCellState(array, newArray, 4, 0,vecinosVivos);
            // assert
            expect(result).toBe(expectedResult);
        });
    });
    describe("When an alive cell has 1 alive neighbour", () => {
        test("should return 0", () => {
            // arrange
            let vecinosVivos = 1;
            const array = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const newArray = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const expectedResult = 0;
            // act
            const result = changeCellState(array, newArray, 4, 0,vecinosVivos);
            // assert
            expect(result).toBe(expectedResult);
        });
    });
    describe("When an alive cell has 4 alive neighbours", () => {
        test("should return 0", () => {
            // arrange
            let vecinosVivos = 4;
            const array = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const newArray = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const expectedResult = 0;
            // act
            const result = changeCellState(array, newArray, 4, 0,vecinosVivos);
            // assert
            expect(result).toBe(expectedResult);
        });
    });
    describe("When a death cell has 1 alive neighbour", () => {
        test("should return 0", () => {
            // arrange
            let vecinosVivos = 1;
            const array = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const newArray = [
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 1, 0],
                [1, 1, 1, 1, 0],
            ];
            const expectedResult = 0;
            // act
            const result = changeCellState(array, newArray, 0, 3,vecinosVivos);
            // assert
            expect(result).toBe(expectedResult);
        });
    });
});
