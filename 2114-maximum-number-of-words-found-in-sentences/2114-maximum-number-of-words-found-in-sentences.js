/**
 * @param {string[]} sentences
 * @return {number}
 */
function mostWordsFound(sentences) {
    let max = 0;
    for(let i = 0; i < sentences.length; i++){
        if(sentences[i].split(" ").length > max){
            max = sentences[i].split(" ").length;
        }
    }
    return max
};