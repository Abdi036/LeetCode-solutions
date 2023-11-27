/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
function findWordsContaining(words, x) {
    let arr = [];
    words.filter(function(char,i){
       return char.includes(x) ? arr.push(i) : arr;
    })
    return arr;
};