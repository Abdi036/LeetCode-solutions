/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let strSet = new Set();
  let ptr = 0;
  let maxNum = 0;

  for (let i = 0; i < s.length; i++) {
    while(strSet.has(s[i])){
        strSet.delete(s[ptr]);
        ptr++;
    }
    strSet.add(s[i]);
    maxNum = Math.max(maxNum,i - ptr + 1)
  }
  return maxNum;
}