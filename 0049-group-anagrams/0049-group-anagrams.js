/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     let hashMap = new Map()

    for(let str of strs){
        const sorted = str.split("").sort().join("")

        if(!hashMap.has(sorted)){
            hashMap.set(sorted,[])
        }
        hashMap.get(sorted).push(str)
    }
    const grouped = Array.from(hashMap.values())
    return grouped
};