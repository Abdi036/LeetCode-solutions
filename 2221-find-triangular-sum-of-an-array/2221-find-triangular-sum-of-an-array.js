/**
 * @param {number[]} nums
 * @return {number}
 */
function triangularSum(nums) {
    let length = nums.length

    while(length > 1){
        let arr = [];
        for(let i = 0; i < length - 1; i++){
            arr.push((nums[i] + nums[i + 1]) % 10)
        }
        nums = arr;
        length = nums.length
    }

 return nums[0]
    
};