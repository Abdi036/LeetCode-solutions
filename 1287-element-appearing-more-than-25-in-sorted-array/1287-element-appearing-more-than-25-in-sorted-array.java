class Solution {
    public int findSpecialInteger(int[] arr) {
       int arrLength = arr.length;
       int divide = (int)Math.floor(arrLength/4);

       for(int i = 0; i < (arrLength - divide); i++){
           if(arr[i] == arr[i + divide]){
             return arr[i];
           } 
       } 
    return -1; 
    } 
};