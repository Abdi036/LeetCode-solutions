/**
 * @param {string} s
 * @return {number}
 */
function minOperations(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] !== (i % 2).toString()){
            count++;
        }
    }
    return Math.min(count,s.length - count);
    
};