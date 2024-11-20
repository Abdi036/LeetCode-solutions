/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    function BS(arr,target){
        let left = 0
        let right = arr.length - 1;


        while(left <= right){
            let mid = Math.floor((left + right)/2)
            if(arr[mid] === target){ 
                return true
            }
            else if(arr[mid] < target){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
        return false
    }

    for(let i = 0; i < matrix.length; i++){
        if(BS(matrix[i],target)){
          return true
        }
    }
    return false
};