/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if(numRows === 1 || s.length < numRows) return s;

    let Flag = false;
    let count = 0;
    let current;
    let container = new Array(numRows).fill("");

    for(let i = 0; i < s.length; i++){
        current = s[i];
        container[count] += current;

        if(count === 0 || count >= numRows - 1) {
            Flag = !Flag;
        }
        Flag ? count++ : count--;
    }
    return container.join("");
};