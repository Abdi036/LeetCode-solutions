/**
 * @param {number[]} pref
 * @return {number[]}
 */
function findArray(pref) {
    const container = [];
    for(let i = 0; i < pref.length; i++){
         container.push(pref[i] ^ pref[i - 1]) 
    }
    return container
};