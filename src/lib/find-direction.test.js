import { findDirection } from './find-direction.js';

test('should return path and letters', () => {
  const mapExample = [
    [' ', ' ', '@', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', 'x', '-', 'B', '-', '+', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', ' ', '+', '-', '-', '+'],
  ];
  const position = { x: 8, y: 0 };
  const directionIndex = 0;

  const result = findDirection(mapExample, position, directionIndex);

  expect(result).toEqual(1);
});
