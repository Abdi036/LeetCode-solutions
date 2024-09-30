/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let left = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
       [ nums[i],nums[left]] =[ nums[left],nums[i]]
      left++
    }
  } 
};