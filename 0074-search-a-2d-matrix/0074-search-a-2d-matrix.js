/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    let arr = matrix.flat();
     if(arr.includes(target)) return true;
     else return false;
};