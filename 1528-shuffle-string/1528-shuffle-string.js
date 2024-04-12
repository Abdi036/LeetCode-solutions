/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
    let arr = Array.from(s.length);
    for(let i = 0; i < s.length; i++){
         arr[indices[i]] = s[i]
    }
return arr.join("")
};