class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        count = 0

        for i in range(len(nums)):
            if(k > nums[i]):
                count+=1
        return count