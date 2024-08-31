/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
    const letterFreq = new Map();

    for(let i = 0; i < s.length; i++){
        let letter = s[i]
        letterFreq.set(letter,(letterFreq.get(letter) ||0) + 1)
    }
    const arr = [...letterFreq.entries()].sort((a,b)=> b[1] - a[1])

    let res = ""
    for(let[char,freq] of arr){
        res += char.repeat(freq)
    }
return res;
};