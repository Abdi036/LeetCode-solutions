/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
    const res = [];
    let freq;
    let val;

    for(let i = 0; i < nums.length; i++){
        freq = nums[i]
        val = nums[i+1]
        for(let i = 0; i < freq; i++){
          res.push(val)
        }
        nums.shift()
    }
    return res
};