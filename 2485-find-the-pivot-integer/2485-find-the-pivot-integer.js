/**
 * @param {number} n
 * @return {number}
 */
function pivotInteger(n) {
     let totalSum = n*(n+1)/2;
     let curSum = 0;

     while(totalSum > curSum){
        curSum += n;

        if(totalSum === curSum) return n;
        else{
            totalSum -= n;
            n--;
        }
     }
     return -1
};