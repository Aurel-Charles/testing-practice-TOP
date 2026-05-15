import { reverseString } from "./reverseString.js";


test('The function works', () => {
    expect(reverseString('test')).toBe('tset');
  })

test('String is not a string', () => {
    expect(reverseString(3)).toBe(false);
  })

test('String is a sentence', () => {
    expect(reverseString('hello odin')).toBe("nido olleh");
  })

test('String is a sentence with uppercase', () => {
    expect(reverseString('Hello Odin')).toBe('nidO olleH');
  })

test('String is a sentence with special character', () => {
    expect(reverseString('Hello *Odin12!')).toBe('!21nidO* olleH');
  })

test('String is empty', () => {
    expect(reverseString('')).toBe('');
  })

test('String is one character', () => {
    expect(reverseString('a')).toBe('a');
  })

test('String is a palimdrome', () => {
    expect(reverseString('tenet')).toBe('tenet');
  })


  
  