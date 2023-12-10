/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
    const transp = [];
    for(let i = 0; i < matrix[0].length; i++){
        const temp = [];
         for(let j = 0; j < matrix.length; j++){
             temp.push(matrix[j][i])
        }
        transp.push(temp)
    }
    return transp;
};