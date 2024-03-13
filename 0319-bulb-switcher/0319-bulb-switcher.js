/**
 * @param {number} n
 * @return {number}
 */
function bulbSwitch(n) {
    // if(n === 0) return 0;
    // if(n === 1) return 1;
    // let arr = Array(n).fill(1);
    // let res = 0;
    // for(let i = 1; i < arr.length; i++){
    //      for(let j = i; j < arr.length; j += (i + 1)){
    //         arr[j] = arr[j] === 1 ? 0:1;
    //      }
    // }

    // for(let i = 0; i < arr.length; i++){
    //     res += arr[i]
    // }
    // return res;
    let res = Math.floor(Math.sqrt(n));
    return res;
 };
