/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
   const numSet = new Set();
    const cont = [];
   for(let i = 0; i < nums.length; i++){
    if(numSet.has(nums[i])){
        if(cont.includes(nums[i])){
            continue;
        }else{
            cont.push(nums[i])
        }
    }else{
        numSet.add(nums[i])
     }
   }

   return cont
};