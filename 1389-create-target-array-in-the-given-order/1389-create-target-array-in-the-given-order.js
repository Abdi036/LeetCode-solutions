/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
function createTargetArray(nums, index) {
    const target = [];

    for(let i = 0; i < index.length; i++){
        target.splice(index[i],0,nums[i])
    }
     return target
};