/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
    let count = 0;
    let container = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                count++
            }
      }
      container.push(count)
      count = 0;
    }
    return container;
};