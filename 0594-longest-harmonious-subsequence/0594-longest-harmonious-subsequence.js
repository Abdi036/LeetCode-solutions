/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
    nums.sort((a,b)=>a-b)
    let count = 0
    let left = 0;
    let right = 1;

    while(right < nums.length){
        let diff = nums[right] - nums[left]
        if(diff === 1){
            count = Math.max(count, (right - left) + 1)
        }
        if(diff <= 1){
            right++
        }else{
            left++
        }
    }
    return count
};