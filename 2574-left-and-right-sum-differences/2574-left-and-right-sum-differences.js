/**
 * @param {number[]} nums
 * @return {number[]}
 */

function leftRightDifference(nums) {
   const answer = [] 
   const leftSum = [] 
   const rightSum = [] 

   for(let i = 0; i < nums.length; i++){
        if(!nums[i-1]){
            leftSum.push(0)
        }else{
            leftSum.push(leftSum[i - 1] + nums[i - 1])
        }

        // right sum

        let sum = 0;
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
        }
         rightSum.push(sum);
   }

    for(let i = 0; i < rightSum.length; i++){
       answer.push(Math.abs(leftSum[i] - rightSum[i]))
    }
    
 return answer
};