/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function merge(left,right){
        const res = []
        let lIdx = 0
        let rIdx = 0
        while(lIdx < left.length && rIdx < right.length){
            if(left[lIdx] < right[rIdx]){
                res.push(left[lIdx])
                lIdx++
            }else{
                res.push(right[rIdx])
                rIdx++
            }
        }
        return [...res, ...left.slice(lIdx), ...right.slice(rIdx)]
}
var sortArray = function(nums) {
    if(nums.length <= 1) return nums

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(sortArray(left), sortArray(right));
};