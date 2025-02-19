/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let minLength = Infinity
    let curSum =  0

    for(let i = 0; i < nums.length; i++){
        curSum += nums[i]
        while(curSum >= target){
            curSum -= nums[left]
            let len = (i - left) + 1
            minLength = Math.min(minLength,len)
            left++
        }
    }
    return minLength < Infinity ? minLength : 0
};