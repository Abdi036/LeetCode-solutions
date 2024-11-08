/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set(jewels)
    let count = 0

    for(let i = 0; i < stones.length; i++){
        if(jewelSet.has(stones[i])){
            count++
        }
    }
    return count
};