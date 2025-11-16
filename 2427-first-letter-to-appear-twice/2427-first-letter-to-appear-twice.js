/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const hashSet = new Set()

    for(let i = 0; i < s.length; i++){
        if(hashSet.has(s[i])){
            return s[i]
        }else{
            hashSet.add(s[i])
        }
    }
};

