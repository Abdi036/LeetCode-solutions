/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
   let str = s.split(" ").reverse();
 let con = []
     for(let i = 0; i < str.length; i++){
        if(str[i] !== ""){
            con.push(str[i]);    
        }
     }
     let res = (con.join(" "));
     return res;
};