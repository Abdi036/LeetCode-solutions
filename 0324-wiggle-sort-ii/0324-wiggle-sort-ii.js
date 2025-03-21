/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums) {
    nums.sort((a,b) => a - b)
    const arr = [...nums];
    let start = Math.floor((nums.length - 1) / 2)
    let end = nums.length - 1
    for(let i = 0; i < nums.length; i++){
        if(i % 2 === 0){
            nums[i] = arr[start]
            start--
        }else{
            nums[i] = arr[end]
            end--;
        }
    }
return nums    
};