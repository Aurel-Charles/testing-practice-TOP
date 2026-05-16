import { caesarCipher } from "./caesarCipher.js";


describe('caesarCipher', ()=> {
    test('The caesarCipher exist', () => {
      expect(caesarCipher("abc" , 1)).toBeTruthy();
    })
    test('Simple', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd')
    })
    test('Wrapping Alphabet', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc')
    })
    test('Case preservation', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    })
    test('all uppercase string', () => {
        expect(caesarCipher('HELLO', 3)).toBe('KHOOR')
    })
    test('Keep punctuation', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
    test('string with numbers', () => {
        expect(caesarCipher('abc12', 3)).toBe('def12')
    })
    test('negatif shifter', () => {
        expect(caesarCipher('def', -3)).toBe('abc')
    })
    test('negatif < 26 shifter', () => {
        expect(caesarCipher('def', -29)).toBe('abc')
    })
    test('shifter > 26', () => {
        expect(caesarCipher('abc', 29)).toBe('def')
    })
    test('shifter = 0', () => {
        expect(caesarCipher('bonjour', 0)).toBe('bonjour')
    })
    test('negative shift with wrap', () => {
        expect(caesarCipher('a', -1)).toBe('z')
    })
    test('negative shift with capital wrap', () => {
        expect(caesarCipher('A', -3)).toBe('X')
    })
    test('shift = -26', () => {
        expect(caesarCipher('abc', -26)).toBe('abc') })
    test('shift very negative', () => { 
        expect(caesarCipher('abc', -29)).toBe('xyz') })
})
