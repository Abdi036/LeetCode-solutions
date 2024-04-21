/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
   const container = [];
   let leftArr = nums.slice(0,n);
   let rightArr = nums.slice(n,2*n);
    for(let i = 0; i < n; i++){
        container.push(leftArr[i]) ;
        container.push(rightArr[i]) ;
    }
    return container;
};