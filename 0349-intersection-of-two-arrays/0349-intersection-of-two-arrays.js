/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    const numSet1 = new Set(nums1);
    const numSet2 = new Set(nums2);
    let intrPoint = [];
    for(const num of numSet2){
        if(numSet1.has(num)){
            intrPoint.push(num);
        }
    }
    return intrPoint;
};
