import { verifyNeighbours } from "../js/functions.js";
import { randomArray } from "../js/functions.js";

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
describe('Given function randomArray', () => {
    describe('No parameters needed', () => {
        test('should return a new random array', () => {
            // arrange 
            
            // act 
            const array = randomArray();
            const result = Array.isArray(randomArray());
            const expectedResult = true;
            // assert
            expect(result).toBe(expectedResult);
        });
    });
  
});
