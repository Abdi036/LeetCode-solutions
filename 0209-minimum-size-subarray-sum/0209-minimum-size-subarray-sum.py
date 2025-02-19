class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l = 0
        minLength = float("inf")
        curSum = 0

        for r in range(len(nums)):
            curSum += nums[r]
            while curSum >= target:
                curSum -= nums[l]
                length = (r - l) + 1
                minLength = min(minLength,length)
                l += 1
        return minLength if minLength < float("inf") else 0