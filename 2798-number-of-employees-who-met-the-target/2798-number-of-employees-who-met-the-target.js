/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
function numberOfEmployeesWhoMetTarget(hours, target) {
    let res = 0;

    for(let i = 0; i < hours.length; i++){
        if(hours[i] >= target){
            res++
        }
    }
    return res
};