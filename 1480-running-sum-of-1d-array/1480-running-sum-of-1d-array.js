/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
    let arr = new Array(nums.length).fill(0);
     arr[0] = nums[0]
     for(let i = 1; i < nums.length; i++){
        arr[i] = nums[i] + arr[i - 1]
     }
     return arr
};