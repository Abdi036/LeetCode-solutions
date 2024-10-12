/**
 * @param {string} s
 * @return {string}
 */
function reverseOnlyLetters(s) {
    let l = 0
    let r = s.length - 1
    const str = s.split("")

     while(l <= r){
        if(/^[a-zA-Z]$/.test(s[l]) && /^[a-zA-Z]$/.test(s[r])){
           [str[l],str[r]] = [str[r],str[l]]
           l++
           r--
        }else if(!/^[a-zA-Z]$/.test(s[l])){
            l++
        }else if(!/^[a-zA-Z]$/.test(s[r])){
            r--
        }
    } 
    return str.join("")
};