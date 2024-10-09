/**
 * @param {string} s
 * @return {number}
 */
function minAddToMakeValid(s) {

    const stack = [];
    let count = 0

    for(let i = 0; i < s.length; i++){
        if(stack.length === 0 && s[i] === ")"){
            count++
        }
        if(s[i] === "(") stack.push(s[i])
        else stack.pop()
    }

    return count + stack.length
};