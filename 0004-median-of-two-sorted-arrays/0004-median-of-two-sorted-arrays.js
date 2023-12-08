/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    let merged = [...nums1,...nums2];
   let sorted =  merged.sort((a,b) => a - b);
    if(sorted.length % 2 === 0){
        let val = (sorted.length / 2);
        return (sorted[val] + sorted[val - 1])/2;
    }else{
       let val = Math.floor(sorted.length / 2);
        return sorted[val];
    }
};