/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums.sort((a,b) => a - b)
    avgContainer = new Set()

    while(nums.length > 1){
        big = nums.pop()
        small = nums.shift()
        avg = (big + small) / 2
        avgContainer.add(avg)
    }
    return avgContainer.size
};