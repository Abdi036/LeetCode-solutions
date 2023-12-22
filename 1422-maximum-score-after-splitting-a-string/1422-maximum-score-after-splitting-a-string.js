/**
 * @param {string} s
 * @return {number}
 */
 function maxScore(s) {
    let current = 0;
    let left = 0;
    let right = s.split('1').length - 1;

    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === '0'){
            left++;
        }else{
            right--;
        }
        const maxnum = right + left;

        current = Math.max(current,maxnum);
    }
    return current;
};

 