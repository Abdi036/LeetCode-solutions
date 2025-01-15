/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    len = arr.length
    index = 0

    while(index < len){
        if(arr[index] === 0){
            arr.splice(index + 1,0,0)
            arr.pop()
            index++
        }
        index++
    }
};