/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    const hashMap = new Map();

    for(let i = 0; i < nums.length; i++){
        if(hashMap.has(nums[i])){
            hashMap.set(nums[i],hashMap.get(nums[i]) + 1);
        }else{
            hashMap.set(nums[i],1)
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(hashMap.get(nums[i]) === 1)
       return nums[i];
    }
};