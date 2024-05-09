/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
function maximumHappinessSum(happiness, k) {
    happiness.sort((a,b)=> b - a)
    let sum = 0;
    let count = 0;
    while(count < k){
        sum += Math.max(happiness[count] - count,0)
        count++
    }
    return sum
};