/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
 if(!haystack.includes(needle)) {
     return -1;
 }else{
     const x =haystack.indexOf(needle);
     return x;
 }
  
};