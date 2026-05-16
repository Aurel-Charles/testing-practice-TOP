import { analyzeArray } from "./analyzeArray.js";

describe('analyzeArray', ()=> {
    test('The analyzeArray exist', () => {
        const result = analyzeArray([1])
        expect(result).toEqual({ average: 1, min: 1, max: 1, length: 1 });
    })
    test('Simple test', () => {
        const result = analyzeArray([1,8,3,4,2,6])
        expect(result).toEqual({ average: 4, min: 1, max: 8, length: 6 });
    })
    test('With negative number', () => {
        const result = analyzeArray([-5, -1, 3])
        expect(result).toEqual({ average: -1, min: -5, max: 3, length: 3 });
    })
    test('with decimal', () => {
        const result = analyzeArray([0.1, 0.2, 0.3])
        expect(result.average).toBeCloseTo(0.2);
        expect(result.max).toBe(0.3);
        expect(result.min).toBe(0.1);
        expect(result.length).toBe(3);
    })
    test('EMpty array', () => {
        const result = analyzeArray([])
        expect(result).toEqual({ average: null, min: null, max: null, length: 0 });
    })
})