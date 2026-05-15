import { calculator } from "./calculator.js";


describe('calculator', ()=> {
    test('The calculator exist', () => {
      expect(calculator).toBeTruthy();
    })
    
    describe('ADD', () => {
        test('addings works', () => {
          expect(calculator.add(3 , 5)).toBe(8);
        })
        test('addings string with letter doesnt work', () => {
          expect(calculator.add("ze" , 5)).toBe(false);
        })
        test('addings string with number works', () => {
          expect(calculator.add("3" , 5)).toBe(8);
        })
        test('addings negative numbers', () => {
          expect(calculator.add("3" , (-5))).toBe(-2);
        })
        test('addings zero', () => {
          expect(calculator.add(0 , 5)).toBe(5);
        })
        test('addings decimals number', () => {
          expect(calculator.add(0.1 , 0.3)).toBeCloseTo(0.4);
        })
    })

    describe('SUB', () => {
        test('subtract works', () => {
            expect(calculator.subtract(12 , 4)).toBe(8);
          })
          test('subtract string with letter doesnt work', () => {
            expect(calculator.subtract("ze" , 5)).toBe(false);
          })
          test('subtract string with number works', () => {
            expect(calculator.subtract("3" , 5)).toBe(-2);
          })
          test('subtract negative numbers', () => {
            expect(calculator.subtract("3" , (-5))).toBe(8);
          })
          test('subtract zero', () => {
            expect(calculator.subtract(0 , 5)).toBe(-5);
          })
          test('subtract decimals number', () => {
            expect(calculator.subtract(0.1 , 0.3)).toBeCloseTo(-0.2);
          })
    })

    describe('MUL', () => {
        test('multiply works', () => {
            expect(calculator.multiply(12 , 4)).toBe(48);
          })
          test('multiply string with letter doesnt work', () => {
            expect(calculator.multiply("ze" , 5)).toBe(false);
          })
          test('multiply string with number works', () => {
            expect(calculator.multiply("3" , 5)).toBe(15);
          })
          test('multiply negative numbers', () => {
            expect(calculator.multiply("3" , (-5))).toBe(-15);
          })
          test('multiply zero', () => {
            expect(calculator.multiply(0 , 5)).toBe(0);
          })
          test('multiply decimals number', () => {
            expect(calculator.multiply(0.1 , 0.3)).toBeCloseTo(0.03, 3);
          })
    })

    describe('DIV', () => {
        test('divide works', () => {
            expect(calculator.divide(12 , 4)).toBe(3);
          })
          test('divide string with letter doesnt work', () => {
            expect(calculator.divide("ze" , 5)).toBe(false);
          })
          test('divide string with number works', () => {
            expect(calculator.divide("15" , 5)).toBe(3);
          })
          test('divide negative numbers', () => {
            expect(calculator.divide("15" , (-5))).toBe(-3);
          })
          test('divide zero', () => {
            expect(calculator.divide(5 , 0)).toBe(false);
          })
          test('divide decimal', () => {
            expect(calculator.divide(9 , 0.31)).toBeCloseTo(29.03);
          })
    })
})
