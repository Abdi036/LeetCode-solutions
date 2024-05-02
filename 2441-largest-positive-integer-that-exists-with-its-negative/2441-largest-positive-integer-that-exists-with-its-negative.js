/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxK(nums) {
    let max = 0;
    const negNum = []
    const posNum = []
    nums.filter(num=>{
        num < 0 ? negNum.push(num) : posNum.push(num)
    })

    for(let i = 0; i < nums.length; i++){
        if(negNum.includes(-posNum[i])){
            max < posNum[i] ? max = posNum[i] : ""
        }
    }
    return max > 0 ? max : -1
};