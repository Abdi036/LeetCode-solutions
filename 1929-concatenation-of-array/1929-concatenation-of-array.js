/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getConcatenation(nums) {
    // let clone = nums;
    return ([...nums,...nums].flat())
};