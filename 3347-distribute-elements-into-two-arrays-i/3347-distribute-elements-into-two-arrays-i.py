class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        ptr1 = 0
        ptr2 = 0

        arr1 = []
        arr2 = []

        if len(nums) > 1:
         arr1.append(nums[0])
        if len(nums) > 2:
         arr2.append(nums[1])
        
        for i in range(2,len(nums)):
            
            if arr1[ptr1] > arr2[ptr2]:
                ptr1 += 1
                arr1.append(nums[i])
            else:
                 ptr2 += 1
                 arr2.append(nums[i])
        res = arr1 + arr2
        return res