import { capitalize } from "./capitalize.js";


test('The function works', () => {
  expect(capitalize('test')).toBe('Test');
})


test('String is a string', () => {
  expect(capitalize("3")).toBe("3");
});

test('String is not a string', () => {
  expect(capitalize(3)).toBe(false);
});

test('String is one character', () => {
  expect(capitalize("a")).toBe("A")
});

test('String is a sentence', () => {
  expect(capitalize("hello odin")).toBe("Hello odin")
});

test('String is already capitalized', () => {
  expect(capitalize("Bonjour")).toBe("Bonjour")
});

test('String has all uppercase character', () => {
  expect(capitalize("BONJOUR")).toBe("Bonjour")
});

test('String start with a number', () => {
  expect(capitalize("12BONJOUR")).toBe("12bonjour")
});

test('Empty string', () => {
  expect(capitalize("")).toBe("")
});



