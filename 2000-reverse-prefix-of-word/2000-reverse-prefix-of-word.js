/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word, ch) {
    if(word.includes(ch)){
        for(let i = 0; i < word.length; i++){
            if(word[i] === ch){
                const str = word.slice(0,i+1)
                var restOfwords = word.slice(i+1,word.length)
                var reversedStr = str.split("").reverse().join("")
                break;
            }
        }
    return reversedStr + restOfwords;
    }
    return word
};