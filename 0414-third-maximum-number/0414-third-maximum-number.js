/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    let set = new Set(nums)
    let [...arr] = set;
    arr.sort((a,b)=>b-a)
    if(arr.length < 3) return Math.max(...arr);
    else{
        return arr[2]
    }
};