/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let hash_map = new Map()

    for(let char of s){
        if(hash_map.has(char)){
            hash_map.set(char,hash_map.get(char) + 1)
        }else{
            hash_map.set(char,1)
        }
    }
     
     for(let [key,value] of hash_map){
        if(value >= 3){
            while (value >= 3) {
             value -= 2;
            }
            hash_map.set(key, value)
        } 
     }
     const values = [...hash_map.values()]

     return values.reduce((acc,cur) => cur + acc)
};