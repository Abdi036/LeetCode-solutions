/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
    const result = []

    for(let num of nums){
        num % 2 === 0 ? result.unshift(num) : result.push(num)
    }
    return result
};