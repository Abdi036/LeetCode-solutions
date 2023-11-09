/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++){
        const value = target - nums[i];
        for(let j = 1 + i; j < nums.length; j++){
            if(nums[j] === value){
                return [i,j];
            } 
        }
    }
};