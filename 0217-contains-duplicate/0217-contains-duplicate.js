/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = new Map()

    for(let i = 0; i < nums.length; i++){
        if(hashMap.has(nums[i])){
            hashMap.set(nums[i],hashMap.get(nums[i]) + 1)
        }else{
            hashMap.set(nums[i],1)
        }
    }

    for(let [key,value] of hashMap){
        if(value >= 2) return true;
    }
    return false
};