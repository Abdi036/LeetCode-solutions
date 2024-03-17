/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    nums.sort((a,b)=> a - b);
    return nums;
};