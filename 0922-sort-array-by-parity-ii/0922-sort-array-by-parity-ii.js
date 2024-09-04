/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParityII(nums) {
    const newArr = new Array(nums.length)
    let odd = 1;
    let even = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            newArr[even] = nums[i];
            even +=2
        }else{
            newArr[odd] = nums[i];
            odd +=2
        }
    }
    return newArr
};