/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
function arithmeticTriplets(nums, diff) {
   const numSet = new Set(nums)
    let count = 0;
   for(const num of numSet){
     if(numSet.has(num - diff) && numSet.has(num - 2*diff)){
        count++
     }
   }
   return count
};