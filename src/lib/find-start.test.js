import { findStart } from './find-start.js';

test('should return path and letters', () => {
  const mapExample = [
    [' ', ' ', '@', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', 'x', '-', 'B', '-', '+', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', ' ', '+', '-', '-', '+'],
  ];

  const result = findStart(mapExample, '@');

  expect(result).toStrictEqual({
    x: 2,
    y: 0,
  });
});

test('should throw error start not found', () => {
  const mapExample = [[' ', ' ', '-', '-', 'A', '-', '-', '-', ' ']];

  expect(() => findStart(mapExample, '@')).toThrow('Start not found');
});
