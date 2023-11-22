/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
    const mtrx  = matrix.flat(1).sort((a,b)=>a-b);
    return mtrx[k - 1];
};