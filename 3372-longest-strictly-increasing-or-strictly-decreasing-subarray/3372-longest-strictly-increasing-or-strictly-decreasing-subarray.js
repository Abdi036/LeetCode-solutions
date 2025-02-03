/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let maxLen = 1
    let decNum = 1
    let incNum = 1

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i + 1]){
            decNum += 1
            incNum = 1
        }
        else if(nums[i] < nums[i + 1]){
            incNum += 1
            decNum = 1
        }
        else{
            incNum = 1
            decNum = 1
        }
        maxLen = Math.max(maxLen,incNum,decNum)
    }
    return maxLen
};