/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums) {
    let posNum = 0;
    let negNum = 0;
    for(let val of nums){
        if(val > 0) posNum++;
        if(val < 0) negNum++;
    }
    return Math.max(posNum,negNum)
};