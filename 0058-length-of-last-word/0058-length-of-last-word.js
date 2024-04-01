/**
 * @param {string} s
 * @return {number}
 */
function  lengthOfLastWord(s) {
  const container = [];
  const word = s.split(" ");
  for(let i = 0; i < word.length; i++){
    if(word[i] === "") continue;
    else{
        container.push(word[i])
    }
  }
return container[container.length - 1].length;
};