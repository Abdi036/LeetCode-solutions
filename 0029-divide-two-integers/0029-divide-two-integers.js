/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    const result = Math.trunc(dividend/divisor);
    if( result > 2147483647) return 2147483647;
    else if(result < -2147483648) return 2147483648;
    else return result;
};

 