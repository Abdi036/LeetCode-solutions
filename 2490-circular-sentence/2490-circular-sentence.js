/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const words = sentence.split(" ")

    const firstChar  =  words[0][0]
    const lastChar  = words[words.length - 1][words[words.length - 1].length - 1];

    if(firstChar !== lastChar) return false

     for (let i = 1; i < words.length; i++) {
        if (words[i][0] !== words[i - 1][words[i - 1].length - 1]) return false;
    }
    return true
};