/**
 * @param {string[]} strs
 * @return {number}
 */
function minDeletionSize(strs) {
    const newArr = []
    let count = 0

    for(let i = 0; i < strs[0].length; i++){
      let newStr = ''
         for(let j = 0; j < strs.length; j++){
             newStr += strs[j][i]
         }
        let sorted = newStr.split("").sort().join("");
        sorted !== newStr ? count++ : count
    }
    return count
};