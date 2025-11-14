/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithSum(nums, goal) {
    let map = new Map();
    map.set(0,1);
    let sum = 0;
    let result = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(map.has(sum - goal)){
            result += map.get(sum - goal);
        }
        map.set(sum,(map.get(sum)|| 0) + 1);
    }
    return result;
}