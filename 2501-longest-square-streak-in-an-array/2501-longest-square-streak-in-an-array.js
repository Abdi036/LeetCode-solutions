/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    nums.sort((a, b) => a - b);
    const numSet = new Set(nums);  
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let length = 1;

        while (numSet.has(current * current)) {
            current = current * current;
            length++;
        }

        maxLength = Math.max(maxLength, length);
    }
    return maxLength > 1 ? maxLength : -1;
};
