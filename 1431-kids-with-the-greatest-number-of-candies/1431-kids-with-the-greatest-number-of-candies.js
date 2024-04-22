/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    let res = []
    let max = Math.max(...candies)
    for(let i = 0; i < candies.length; i++){
       candies[i] + extraCandies >= max ?  res.push(true):res.push(false)
    }
     return res
};