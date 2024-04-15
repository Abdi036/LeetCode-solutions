/**
 * @param {string} s
 * @return {string}
 */
function finalString(s) {
    let str = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] !== "i"){
            str += s[i]
        }else{
         str = str.split("").reverse().join("")
        }
    }
    return str 
};