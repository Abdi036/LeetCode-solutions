class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        incNum = 1
        decNum = 1
        maxLen = 1

        for i in range(len(nums) - 1):
            if nums[i] > nums[i + 1]:
                decNum += 1
                incNum = 1
            elif nums[i] < nums[i + 1]:
                incNum += 1
                decNum = 1
            else:
                 incNum = 1
                 decNum = 1
            maxLen = max(maxLen, incNum, decNum)
        return maxLen