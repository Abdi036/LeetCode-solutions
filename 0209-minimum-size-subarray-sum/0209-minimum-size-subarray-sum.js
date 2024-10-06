/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
    let left = 0;
    let total = 0;
    let result = Infinity;

    for(let r = 0; r < nums.length; r++){
         total += nums[r]
        while(total >= target){
             result = Math.min(r - left + 1, result)
             total -= nums[left]
             left++
            }      
        }
    return result === Infinity ? 0 : result
};