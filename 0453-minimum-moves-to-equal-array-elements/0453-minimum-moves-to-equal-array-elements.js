/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves(nums) {
    nums.sort((a,b) => a - b)
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    let sub;

    for(let i = 0; i < nums.length; i++){
        if(left >= right){
            break;
        }
        sub = nums[right] - nums[left]
        count += sub
        right--
    }

  return count
};