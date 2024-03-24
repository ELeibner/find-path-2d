import { findPath } from './src/lib/find-path.js';

// Example:
const mapExample = [
  [' ', ' ', '@', '-', 'A', '-', '-', '-', '+'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
  [' ', 'x', '-', 'B', '-', '+', ' ', ' ', 'C'],
  [' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'],
  [' ', ' ', ' ', ' ', ' ', '+', '-', '-', '+'],
];

const { letters, path } = findPath(mapExample, '@', 'x');
console.log('Letters:', letters);
console.log('Path:', path);
