/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid, nums.length);

  let sortedLeft = sortArray(left);
  let sortedRight = sortArray(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  
  res = res.concat(left.slice(i)).concat(right.slice(j));
  return res;
}