class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        curSum = 0
        count = 0

        for i in range(len(nums)):
            curSum += nums[i]

            if curSum == 0:
                count += 1
        return count
            