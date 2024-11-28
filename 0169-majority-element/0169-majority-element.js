/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashMap = new Map()

    for(let i = 0; i < nums.length; i++){
        if(hashMap.has(nums[i])){
            hashMap.set(nums[i],hashMap.get(nums[i]) + 1)
        }else{
            hashMap.set(nums[i],1)
        }
    }
    let max = 0
    let majorityElement = 0
    for(let [key,value] of hashMap){
        if(value > max){
            max = value
            majorityElement = key
        }
    }

    return majorityElement
};