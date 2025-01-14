/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let len = A.length
    const res = new Array(len).fill(0)
    let ele_A = new Set()
    let ele_B = new Set()
    let count = 0

    for(let i = 0; i < len; i++){
        ele_A.add(A[i])
        ele_B.add(B[i])
        for(let element of ele_A){
            if(ele_B.has(element)){
                count++
            }
        }
        res[i] = count
        count = 0
    }
    return res
};