class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        left,right = 0,len(nums) - 1

        while(left < right):
            if(nums[left] == nums[left + 1]):
                nums[left] = nums[left] * 2
                nums[left + 1] = 0
            left += 1
          
        ptr = 0

        for i in range(len(nums)):
            if nums[i] != 0:
                nums[i],nums[ptr] = nums[ptr],nums[i]
                ptr += 1
        return nums

