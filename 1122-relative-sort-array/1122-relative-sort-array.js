/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
    const included = []
    const excluded = []
    const result = []

     for(let i = 0; i < arr2.length; i++){
         for(let j = 0; j < arr1.length; j++){
            if(arr2[i] === arr1[j]){
                included.push(arr1[j])
            }
         }
     }

     for(let i = 0; i < arr1.length; i++){
        if(!arr2.includes(arr1[i])){
          excluded.push(arr1[i])
        }
     }
   
    return [...included,...excluded.sort((a,b) => a - b)]
}