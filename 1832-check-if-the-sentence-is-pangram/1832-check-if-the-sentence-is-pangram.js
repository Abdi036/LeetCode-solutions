/**
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangram(sentence) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const str = new Set(sentence)
  const sortedSentence = [...str].sort().join("");
  return letters === sortedSentence;
};