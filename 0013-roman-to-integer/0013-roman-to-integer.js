/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const romanValues = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
        };
    let result = 0;
    for(let i = 0; i < s.length; i++){
        let currentValue = romanValues[s[i]];
        let nextValue = romanValues[s[i + 1]];

        if( currentValue < nextValue) {
            result += (nextValue - currentValue);
            i++;
        }else{
            result += currentValue
        }
    }
    return result;
};
