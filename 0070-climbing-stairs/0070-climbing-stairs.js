/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
     if(n < 2) return n;
    let steps = [1,1];
    for(let i = 2; i <= n; i++){
        steps[i] = steps[i - 1] + steps[i - 2];
    }
    return steps[n];
}