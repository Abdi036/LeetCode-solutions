/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(items, ruleKey, ruleValue) {
    let count = 0;
    for(let i = 0; i < items.length; i++){
        if(ruleKey === "type"){
            items[i][0] === ruleValue && count++;
        }
        else if(ruleKey === "color"){
            items[i][1] === ruleValue && count++;
        }else{
            items[i][2] === ruleValue && count++;
        }
    }
    return count;
};