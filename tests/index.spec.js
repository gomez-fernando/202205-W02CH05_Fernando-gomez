import { verifyNeighbours } from "../js/index.js";

describe('Given function verifyNeighbours', () => {
    describe('When parameter is an array', () => {
        test('should return a new array', () => {
            // arrange 
            const cellsArray = [
                [ 0, 1, 0, 0, 1 ],
                [ 1, 1, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0 ],
                [ 0, 1, 0, 1, 0 ],
                [ 1, 1, 1, 1, 0 ]
              ];
            const expectedResult = [
                [ 1, 1, 0, 0, 0 ],
                [ 1, 0, 0, 1, 0 ],
                [ 0, 0, 0, 1, 0 ],
                [ 0, 0, 0, 0, 1 ],
                [ 1, 1, 0, 1, 0 ]
              ];
            // act 
            const result = verifyNeighbours(cellsArray);
            // assert
            expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
        });
    });
});