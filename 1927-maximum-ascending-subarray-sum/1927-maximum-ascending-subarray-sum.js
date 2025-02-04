/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = 0
    let curSum = 0

    for(let i = 0; i < nums.length; i++){
        if(i === 0 || nums[i] > nums[i - 1]){
            curSum += nums[i]
        }else{
            curSum = nums[i]
        }
        maxSum = Math.max(curSum,maxSum)
    }
    return maxSum
};