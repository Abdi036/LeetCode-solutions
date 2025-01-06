/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let q = []

    for(let i = 1; i < n+1; i++){
        q.push(i)
    }

    while(q.length > 1){
        for(let i = 0; i < k-1; i++){
            q.push(q.shift())
        }
        q.shift()
    }
    return q[0]
};