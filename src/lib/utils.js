export const isChar = (char) => /[A-Z]/.test(char);
export const isConjunction = (char) => isChar(char) || char === '+';
export const isValid = (el) => el !== undefined && el !== ' ';
export const markVisited = (arr, x, y) => (arr[y][x] = ' ');
