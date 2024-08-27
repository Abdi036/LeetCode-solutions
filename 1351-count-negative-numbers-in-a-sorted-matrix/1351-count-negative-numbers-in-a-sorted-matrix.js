/**
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives(grid) {
  let totalCount = 0
    for(let i = 0; i < grid.length; i++){
       totalCount += checkNum(grid[i])
      }
      return totalCount;
};


function checkNum(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) count++
    }
    return count;
}