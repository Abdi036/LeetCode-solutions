/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
   const pasTri = [[1]]

   for(let i = 1; i < rowIndex + 1; i++){
        let temp = [0,...pasTri[i - 1],0]
        let row = []
        for(let j = 0; j < temp.length - 1; j++){
            row.push(temp[j] + temp[j + 1])
        }
        pasTri.push(row)
   } 
   return pasTri[pasTri.length - 1]
};