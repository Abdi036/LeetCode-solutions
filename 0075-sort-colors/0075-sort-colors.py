class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        maxNum = max(nums)
        count = [0] * (maxNum + 1)

        for i in range(len(nums)):
            count[nums[i]] += 1
        
        index = 0
        for i in range(len(count)):
            while(count[i] > 0):
                nums[index] = i
                count[i] -= 1
                index += 1
    