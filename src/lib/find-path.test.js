import { findPath } from './find-path.js';

test('should return path and letters', () => {
  const mapExample = [
    [' ', ' ', '@', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', 'x', '-', 'B', '-', '+', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', ' ', '+', '-', '-', '+'],
  ];

  const result = findPath(mapExample, '@', 'x');

  expect(result).toStrictEqual({
    letters: 'ACB',
    path: '@-A---+|C|+--+|+-B-x',
  });
});

test('should throw error end not detected', () => {
  const mapExample = [
    [' ', ' ', '@', '-', 'A', '-', '-', '-', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ];

  expect(() => findPath(mapExample, '@', 'x')).toThrow('End not detected');
});
