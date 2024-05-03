/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    const length = Math.max(v1.length,v2.length)
     
    for(let i = 0; i < length; i++){
        let num1 = parseInt(v1[i]) || 0
        let num2 = parseInt(v2[i]) || 0

        if(num1 === num2) continue;
        return num1 > num2 ? 1 : -1;
    }

 return 0;
};