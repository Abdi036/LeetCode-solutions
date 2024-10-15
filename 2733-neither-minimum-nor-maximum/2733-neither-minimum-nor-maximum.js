/**
 * @param {number[]} nums
 * @return {number}
 */
function findNonMinOrMax(nums) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== max && nums[i] !== min){
            let neither = nums[i]
            return neither
        }
    }
    return -1
};