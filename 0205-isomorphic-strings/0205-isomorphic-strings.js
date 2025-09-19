/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    const hashMapST = new Map()
    const hashMapTS = new Map()
    let char1;
    let char2;

    for(let i = 0; i < s.length; i++){
        char1 = s[i];
        char2 = t[i];

        if(hashMapST.has(char1) && hashMapST.get(char1) !== char2 ||hashMapTS.has(char2) && hashMapTS.get(char2) !== char1 ) {
            return false;
        }
        hashMapST.set(char1,char2)
        hashMapTS.set(char2,char1)
    }
    return true;
};