/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let x = 0;
  for(let i = 1; i <= nums.length; i++){
    if(nums[x] !== nums[i]){
      x++;
      nums[x] = nums[i];
    }
  }
  return x;
};