/**
 * @param {string[]} words
 * @return {string}
 */
function firstPalindrome(words) {
    let res;
    for(let i = 0; i < words.length; i++){
        res = words[i];
       if(words[i].split("").reverse().join("") === res){
        return res
       } 
    }
        return "";
};