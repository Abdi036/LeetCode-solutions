/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let power = num ** (1/2);
     const Floor = Math.floor(power);
     return (Floor * Floor )=== num ? true: false;
};