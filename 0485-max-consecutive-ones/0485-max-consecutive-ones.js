/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
    let max = 0;
    let count = 0;

    for(let i = 0; i < nums.length + 1; i++){
        if(nums[i] === 1){
            count++
        }else{
           max = Math.max(max,count)
           count = 0;
        }
    } 
  return max  
};