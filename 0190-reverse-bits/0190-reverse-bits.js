/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
   let num = n.toString(2).split("").reverse().join("").padEnd(32,"0");
   return Number.parseInt(num,2);
};