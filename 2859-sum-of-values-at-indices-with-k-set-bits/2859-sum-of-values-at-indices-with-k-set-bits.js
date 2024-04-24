/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

function sumIndicesWithKSetBits(nums, k) {
    let sum = 0;
    let oneFiltered = [];
    const cont = [];

    for(let i = 0; i < nums.length; i++){
        cont.push(dec2bin(i))
    }
    for(let i = 0; i < cont.length; i++){
        oneFiltered.push(cont[i].split("0").join(""))
    }

    for(let i = 0; i < oneFiltered.length; i++){
         if(oneFiltered[i].length === k){
            sum+=nums[i]
         }
    }
return sum;
};