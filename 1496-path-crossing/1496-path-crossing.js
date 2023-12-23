/**
 * @param {string} path
 * @return {boolean}
 */
function isPathCrossing(path) {
    let x = 0, y = 0;
    let curr = new Set();
    curr.add("0,0");

    for (let position of path) {
        if (position === 'E') x++;
         else if (position === 'W') x--;
         else if (position === 'N') y++;
         else if (position === 'S') y--;
        
        let currentPos = `${x},${y}`;
        if (curr.has(currentPos)) return true;
        curr.add(currentPos);
    }
    return false;
};
