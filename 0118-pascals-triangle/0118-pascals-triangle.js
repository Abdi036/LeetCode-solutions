/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
     const pasTri = [[1]]
     for(let i = 1; i < numRows; i++){
        let row = []
        let temp = [0,...pasTri[i - 1],0]
        for(let j = 0; j < temp.length - 1; j++){
            row.push(temp[j] + temp[j + 1])
        }
        pasTri.push(row)
     }
    return pasTri
};