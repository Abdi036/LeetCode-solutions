/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missing = nums.length
    for(let i = 0; i <= nums.length; i++){
        if(nums.includes(missing)){
            missing -= 1
        }else{
            return missing
        }
    }
};