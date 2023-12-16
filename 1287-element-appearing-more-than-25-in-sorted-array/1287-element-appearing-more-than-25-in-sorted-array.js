/**
 * @param {number[]} arr
 * @return {number}
 */
function findSpecialInteger(arr) {
   const arrLength = arr.length;
   const divide = Math.floor(arrLength / 4);
   for(let i = 0; i < (arrLength - divide); i++){
       if(arr[i] === arr[i + divide]) return arr[i]
   }
};

 