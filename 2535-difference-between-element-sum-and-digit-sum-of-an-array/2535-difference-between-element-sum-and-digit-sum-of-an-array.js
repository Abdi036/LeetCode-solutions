/**
 * @param {number[]} nums
 * @return {number}
 */
function differenceOfSum(nums) {
    const num = (nums+"").split(",").join("")
    let digit = [];
    for(let i = 0; i < num.length; i++){
         digit.push(Number(num[i]))
    }
    
    const digitSum = digit.reduce((acc,sum)=>acc + sum,0);
    const elementSum = nums.reduce((acc,sum)=>acc + sum,0);

    return Math.abs(elementSum - digitSum)
};