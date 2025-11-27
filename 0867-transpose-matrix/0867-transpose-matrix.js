/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
    const row = matrix.length;
    const col = matrix[0].length
    const res = Array.from({length:col}, () => new Array(row))
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
           res[j][i] = matrix[i][j]
       }
    }
return res
};