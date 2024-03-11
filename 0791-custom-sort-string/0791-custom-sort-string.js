/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
function customSortString(order, s) {
    let container = [];

    for(let i = 0; i < order.length; i++){
        for(let j = 0; j < s.length; j++){
            if(order[i] === s[j]){
                container.push(s[j]);
            }
        }
    }
    
    let orderedChars = container.join("");
    let lastChar = []

    for(let j = 0; j < s.length; j++){
        if(!orderedChars.includes(s[j])){
            lastChar.push(s[j])
        }
    }

    let result = orderedChars + lastChar.join("");
    return result;
};