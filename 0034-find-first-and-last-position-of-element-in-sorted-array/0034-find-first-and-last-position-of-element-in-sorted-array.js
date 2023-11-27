/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    
function searchRange(nums, target) {
  let result = [];
  nums.forEach(function(val, i) {
    if (val === target)  result.push(i);
  });
  if (result.length === 0 || nums.length === 0)  return [-1, -1];
  return [result[0], result[result.length - 1]];
}