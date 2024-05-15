/**
 * @param {number[]} nums
 * @return {boolean}
 */
function findSubarrays(nums) {
    const res = [];
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let sum = nums[left] + nums[left + 1]
        if(!res.includes(sum)){
            res.push(sum)
            left++
        }else{
            return true
        }
    }
return false;
};