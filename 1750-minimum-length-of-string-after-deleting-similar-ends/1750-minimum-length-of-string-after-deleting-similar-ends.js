/**
 * @param {string} s
 * @return {number}
 */
function minimumLength(s) {
     let prefix = 0;
     let suffix = s.length - 1;

     while(prefix < suffix && s[prefix] === s[suffix]){
         let elet = s[prefix];
         while(prefix <= suffix && s[prefix] === elet){
             prefix++;
         }
         while(suffix >= prefix && s[suffix] === elet){
             suffix--;
         }
     }
     return suffix - prefix + 1;

};