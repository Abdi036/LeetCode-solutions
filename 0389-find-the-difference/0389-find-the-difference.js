/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
     let sorted1 = s.split("").sort();
     let sorted2 = t.split("").sort();

     for(let i = 0; i < sorted2.length; i++){
        if(i > s.length - 1) return sorted2[i];
        else if(sorted2[i] !== sorted1[i]) return sorted2[i];
     }
};