/**
 * @param {number[]} nums
 * @return {number}
 */
function maxFrequencyElements(nums) {
   let freq = new Map();
   for(let i = 0; i < nums.length; i++){
       freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
   }

   const maxValue = Math.max(...freq.values());

   const maxValueElet = [...freq.keys()].filter(nums => freq.get(nums) === maxValue)

   const totalFreq = maxValue * maxValueElet.length;

   return totalFreq;

};