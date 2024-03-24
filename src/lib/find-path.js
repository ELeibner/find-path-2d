import { directions } from '../const/directions.js';
import { findDirection } from './find-direction.js';
import { findStart } from './find-start.js';
import { isChar, isConjunction, isValid, markVisited } from './utils.js';

export function findPath(input, startChar, endChar) {
  const map = JSON.parse(JSON.stringify(input));

  let path = '',
    position = findStart(map, startChar),
    directionIndex = 0,
    letters = '',
    iteration = 0;

  while (map[position.y]?.[position.x] !== endChar) {
    const char = map[position.y]?.[position.x];

    if (isConjunction(char)) {
      directionIndex = findDirection(map, position, directionIndex);
    }

    if (isChar(char)) letters += char;

    if (!isValid(char)) throw new Error('End not detected');

    markVisited(map, position.x, position.y);
    position.x += directions[directionIndex].dx;
    position.y += directions[directionIndex].dy;
    path += char;

    if (++iteration > 100000) throw new Error('Infinite loop detected.');
  }

  path += map[position.y]?.[position.x];

  return { letters, path };
}
