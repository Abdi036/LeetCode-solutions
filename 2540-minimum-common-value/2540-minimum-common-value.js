/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getCommon(nums1, nums2) {
     let temp1 = 0;
     let temp2 = 0;

     while(temp1 < nums1.length && temp2 < nums2.length){
         if(nums1[temp1] === nums2[temp2]) return nums1[temp1] || nums2[temp2];

         if(nums1[temp1] < nums2[temp2]) temp1++;
         else temp2++;
     }
 return -1;
};