/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    let intrPoint = [];
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    const numsSet1 = new Set(nums1);
    const numsSet2 = new Set(nums2);
    for(const nums of numsSet2){
         if(numsSet1.has(nums)){
             intrPoint.push(nums)
         }
    }
    return intrPoint;
};
