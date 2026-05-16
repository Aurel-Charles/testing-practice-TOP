# Testing Practice — The Odin Project

A test-driven JavaScript exercise from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice). The goal is to practice writing unit tests with Jest *before* implementing the functions, following the TDD cycle: **Red → Green → Refactor**.

---

## Functions implemented

| Function | Description |
|---|---|
| `capitalize(string)` | Returns the input with the first letter uppercased and the rest lowercased. |
| `reverseString(string)` | Returns the input string reversed. Preserves case, punctuation, and special characters. |
| `calculator` | Object exposing `add`, `subtract`, `multiply`, and `divide` methods. Coerces numeric strings, rejects non-numeric inputs, and guards against division by zero. |
| `caesarCipher(string, shift)` | Encodes a string with the Caesar cipher. Preserves case, wraps around the alphabet, leaves non-letters untouched, and supports negative shifts and shifts greater than 26. |
| `analyzeArray(array)` | Returns an object with `average`, `min`, `max`, and `length` properties. Handles empty arrays gracefully. |

---

## Tech stack

- **Jest** — testing framework
- **Babel** (`@babel/preset-env`) — to transform ES modules for Jest
- **Webpack 5** — bundling and dev server
- **Node.js** (>= 18)

---

## Installation

```bash
git clone https://github.com/Aurel-Charles/template-webpack-TOP.git
cd template-webpack-TOP
npm install
```

---

## Running the tests

```bash
npm run test
```

Jest auto-discovers any file matching `*.test.js` in `src/`. To run a single test file:

```bash
npx jest src/capitalize.test.js
```

To run tests in watch mode:

```bash
npx jest --watch
```

---

## Other commands

| Command | Description |
|---|---|
| `npm run dev` | Start the Webpack dev server with hot reload |
| `npm run build` | Build the production bundle in `/dist` |
| `npm run deploy` | Deploy to GitHub Pages (`gh-pages` branch) |

---

## Project structure

```
src/
├── capitalize.js
├── capitalize.test.js
├── reverseString.js
├── reverseString.test.js
├── calculator.js
├── calculator.test.js
├── caesarCipher.js
├── caesarCipher.test.js
├── analyzeArray.js
├── analyzeArray.test.js
├── index.js        # Webpack entry point
├── style.css
└── template.html
```

Each function lives in its own file alongside its test file, following the Single Responsibility Principle.

---

## What I learned

- Writing tests before the implementation forces clearer thinking about the function's contract.
- `toBe` for primitives, `toEqual` for objects/arrays, `toBeCloseTo` for floating-point values.
- The `Math.max(array)` vs `Math.max(...array)` gotcha — spread is required.
- IEEE 754 floating-point quirks (`0.1 + 0.2 !== 0.3`).
- The `/g` flag on regex with `.test()` is stateful and easy to misuse.
- Centralizing shared logic (e.g. numeric coercion in `calculator`) prevents bugs that come from copy-pasting the same guard four times.
