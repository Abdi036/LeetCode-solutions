/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    let str = s.split(" ")
    const cont = []
    for(let i = 0; i < str.length; i++){
        cont.push(str[i].split("").reverse().join(""))
    }
    return cont.join(" ")
};