/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
    if(s[0] === "0") return 0;

    let arr = new Array(s.length + 1).fill(0);
    arr[0] = arr[1] = 1;
    for(let i = 2; i <= s.length; i++){
        let num1 = +s[i - 1];
        let num2 = +(s[i - 2] + s[i - 1]);
        if(num1 >= 1 && num1 <= 9) {
             arr[i] += arr[i - 1];
        }
        if(num2 >= 10 && num2 <= 26) {
              arr[i] += arr[i - 2];
        }
    }
    return arr[s.length];
};