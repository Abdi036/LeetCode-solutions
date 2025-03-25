class Solution:
    def minLengthAfterRemovals(self, nums: List[int]) -> int:
        length = len(nums)
        left = (length // 2) - 1  # we can use mid = length // 2 and then right = mid - 1
        right = length - 1
        removal = 0

        while left >= 0:
            if nums[right] > nums[left]:
                removal += 2
                right -= 1
            left -= 1
        return length - removal