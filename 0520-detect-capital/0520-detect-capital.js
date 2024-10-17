/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let temp = word.toLowerCase();
    let capitalize = temp.charAt(0).toUpperCase() + temp.slice(1);  
    let capital = word.toUpperCase();  
    let small = word.toLowerCase();

    return word === capitalize || word === capital || word === small ? true : false

};