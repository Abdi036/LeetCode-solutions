/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    const result = []

    for(let i = 0; i < numbers.length; i++){
        if(numbers[left] + numbers[right] > target){
            right--
        }else if(numbers[left] + numbers[right] < target){
            left++
        }
        else if(numbers[left] + numbers[right] === target){
            result.push(left + 1,right + 1)
            return result
        }
    }

};