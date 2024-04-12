/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
     let left = 0;
     let right = 0;
     let result = 0;

     for(let i = 0; i < s.length; i++){
        s[i] === "R" ? right++ : left++;
        if(right === left) result++;
     }
     return result;
};