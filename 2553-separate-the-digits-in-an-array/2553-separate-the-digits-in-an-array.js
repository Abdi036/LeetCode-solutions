/**
 * @param {number[]} nums
 * @return {number[]}
 */
function separateDigits(nums) {
    let str = String(nums).replace(/[^a-z0-9]/gi,"");
    const x = [...str];
    return x;
};