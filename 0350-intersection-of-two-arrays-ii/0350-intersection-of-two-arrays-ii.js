/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    let temp1 =  0;
    let temp2 =  0;
    let container = [];

    while(temp1 < nums1.length && temp2 < nums2.length){
        if(nums1[temp1] === nums2[temp2]){
            container.push(nums1[temp1]);
            temp1++;
            temp2++;
        }else{
            if(nums1[temp1] < nums2[temp2]) temp1++
            else temp2++;
        }
    }
      return container;
};