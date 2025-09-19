/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
    if(s === "") return 0;
    let leftBracket = 0;
    let rightBracket = 0;
    let max = 0;

 for(let i = 0; i < s.length; i++){
    if(s[i] === "("){
        leftBracket++;
    }else{
        rightBracket++;
    }

    if(leftBracket === rightBracket){
        max = Math.max(max,leftBracket * 2);
    }
    else if(rightBracket > leftBracket){
        leftBracket = 0;
        rightBracket = 0;
    }
 }

        leftBracket = 0;
        rightBracket = 0;

 for(let i = s.length - 1; i > 0; i--){
    if(s[i] === "("){
        leftBracket++;
    }else{
        rightBracket++;
    }

    if(rightBracket === leftBracket){
        max = Math.max(max,leftBracket * 2);
    }
    else if(leftBracket > rightBracket){
        leftBracket = 0;
        rightBracket = 0;
    }
 }
 return max;
};
