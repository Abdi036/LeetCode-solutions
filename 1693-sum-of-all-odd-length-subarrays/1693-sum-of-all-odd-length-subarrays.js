/**
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays(arr) {
     const subArray = [];

     for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j+=2){
            const odd = arr.slice(i,j+1)
            subArray.push(odd)
        }
     }
     return subArray.flat().reduce((cur,acc)=>cur + acc,0);
};