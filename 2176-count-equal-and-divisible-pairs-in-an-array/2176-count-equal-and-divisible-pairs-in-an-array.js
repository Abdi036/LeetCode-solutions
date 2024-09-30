/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countPairs(nums, k) {
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j] && (i * j) % k === 0){
                count++
            }
        }
        
      }
 return count > 0 ? count : 0
};