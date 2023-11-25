/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
   let val = 0;
   let isLessThanZero = x < 0;
  x = Math.abs(x);
   while(x > 0){
      val = val * 10 + x % 10;
      x = Math.floor(x/10);
   }
    if(val >= 2**31 - 1){
      return 0;
    }
   return isLessThanZero ? val * -1 : val ;
};