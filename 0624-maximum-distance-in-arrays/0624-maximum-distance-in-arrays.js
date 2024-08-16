/**
 * @param {number[][]} arrays
 * @return {number}
 */

function maxDistance(arrays) {
    let minNum = arrays[0][0];
    let maxNum = arrays[0][arrays[0].length - 1];
    let res = 0

    for(let i = 1; i < arrays.length; i++){
        const curMin =  arrays[i][0]
        const curMax =  arrays[i][arrays[i].length - 1];

        res = Math.max(res,Math.max(curMax - minNum ,maxNum - curMin))
        maxNum = Math.max(maxNum,curMax)
        minNum = Math.min(minNum,curMin)
    }
    return  res
};