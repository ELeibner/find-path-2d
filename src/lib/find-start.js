export function findStart(map, char) {
    let index = {};
    map.some((row, y) => {
      const x = row.indexOf(char);
      if (x !== -1) {
        index = { x, y };
      }
      return x ? 1 : 0;
    });
    if (Object.keys(index).length === 0) throw new Error('Start not found');
    return index;
  }
  