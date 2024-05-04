/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
    people.sort((a,b)=>a - b)
    let boat = 0;
    let left = 0;
    let right = people.length - 1;
while(left <= right){
        if(people[left] + people[right] <= limit){
            boat++
            left++
            right--
        }else{
            boat++
            right--
        }
    }
    return boat
};