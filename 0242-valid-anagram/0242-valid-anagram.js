/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    // const str1 = s.split('').sort();
    // const str2 = t.split('').sort();
    // return str1.join('') === str2.join('') ? true : false;
return s.split('').sort().join('') === t.split('').sort().join('') ? true : false;
};