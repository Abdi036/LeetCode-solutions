/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let num1 = 0;
    let num2 = Math.ceil(Math.sqrt(c))

    while(num1 <= num2){
        let sum = (num1 * num1) + (num2*num2)
        if(sum < c){
            num1++
        }else if(sum > c){
            num2--
        }else{
            return true
        }
    }
    return false
};