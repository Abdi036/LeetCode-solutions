/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(items, ruleKey, ruleValue) {
    let count = 0;
    const hashMap = new Map();
    hashMap.set("type",0)
    hashMap.set("color",1)
    hashMap.set("name",2)

    for(let i = 0; i < items.length; i++){
        if(items[i][hashMap.get(ruleKey)] === ruleValue) count++
    }
    return count;
};

// optional 

        // if(ruleKey === "type"){
        //     items[i][0] === ruleValue && count++;
        // }
        // else if(ruleKey === "color"){
        //     items[i][1] === ruleValue && count++;
        // }else{
        //     items[i][2] === ruleValue && count++;
        // }