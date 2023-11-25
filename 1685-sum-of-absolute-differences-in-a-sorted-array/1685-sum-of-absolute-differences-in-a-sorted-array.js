/**
 * @param {number[]} nums
 * @return {number[]}
 */

 function getSumAbsoluteDifferences(nums) {
  const length = nums.length;
  const arr = [];
  
  let prefixsum = 0;
  let suffixsum = nums.reduce((acc,cur) => acc + cur,0);
  for(let i = 0; i < length; i++){
      arr[i] = (i * nums[i]) - prefixsum + suffixsum - ((length - i) * nums[i]);
      prefixsum += nums[i];
      suffixsum -= nums[i];
  }
  return arr;
}
 
  

 