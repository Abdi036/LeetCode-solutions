/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split("")

    for(let i = 0; i < arr.length; i+=2*k){
        let rev = arr.slice(i,i+k).reverse()

        for(let j = 0; j < rev.length; j++){
            arr[i+j] = rev[j]
        }
    }
    return arr.join("")
};