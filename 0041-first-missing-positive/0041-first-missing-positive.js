/**
 * @param {number[]} nums
 * @return {number}
 */
 function firstMissingPositive (nums) {
    nums.sort((a,b) => a - b);
    let nonRepeat = new Set(nums);
    nums = [...nonRepeat];
    let missingNumber = 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            if(nums[i] == missingNumber){
                missingNumber++;
            }else{
                break;
            }
        }
    }   
    return missingNumber;
};