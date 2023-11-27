/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function targetIndices(nums, target) {
    let arr=[];
    let sorted = nums.sort((a,b) => a- b).filter(function(val,i){
        if(val === target) arr.push(i);
    })
   return arr;
};