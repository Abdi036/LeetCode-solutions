/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function minSteps(s, t) {
    let sortedS = s.split("").sort().join("");
    let sortedT = t.split("").sort().join("");
    if (sortedS === sortedT) return 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
    if (sortedT.includes(sortedS[i])) {
        sortedT = sortedT.replace(sortedS[i], ""); 
    } else {
        count++;
    }
    }
    return count;
};