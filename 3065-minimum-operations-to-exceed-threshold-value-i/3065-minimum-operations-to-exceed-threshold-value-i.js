/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
    nums.sort();
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        nums[i] < k ? count++ : ''
    }
    return count
};