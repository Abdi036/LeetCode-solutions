class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        minVal = 1
        sumUp = 0

        for i in range(len(nums)):
            sumUp += nums[i]
            minVal = min(minVal,sumUp)

        return minVal if minVal > 0 else (minVal * -1) + 1

