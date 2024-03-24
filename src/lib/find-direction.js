import { directions } from '../const/directions.js';
import { isValid } from './utils.js';

export function findDirection(map, position, currentIndex) {
  let nextIndex = currentIndex;
  for (let i = 0; i < directions.length; i++) {
    nextIndex = directions[(currentIndex + i) % directions.length];
    const nextChar =
      map[position.y + nextIndex.dy]?.[position.x + nextIndex.dx];
    if (nextChar && isValid(nextChar)) {
      nextIndex = (currentIndex + i) % directions.length;
      break;
    }
  }

  return nextIndex;
}
