class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        res = 0
        left = 0
        cur = 0

        for r in range(len(nums)):
            while cur & nums[r]:
                cur = cur ^ nums[left]
                left += 1
            res = max(res,r - left + 1)
            cur = cur ^ nums[r]
        return res
