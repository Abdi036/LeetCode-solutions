/**
 * @param {number[]} nums
 * @return {number[]}
 */
function numberGame(nums) {
    const cont = [];
    let alice;
    let bob;

    nums.sort((a,b)=>a-b);
    for(let i = 0; i < nums.length; i++){
        alice =  nums[i]
        bob = nums[i+1]
        cont.push(bob)
        cont.push(alice)
        nums.shift()
    }
return cont    
};