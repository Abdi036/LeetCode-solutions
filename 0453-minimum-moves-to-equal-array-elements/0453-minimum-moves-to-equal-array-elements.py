class Solution:
    def minMoves(self, nums: List[int]) -> int:
        nums.sort()
        count = 0
        left = 0
        right = len(nums) - 1
        sub = 0
        
        for i in range (len(nums)):
            if left >= right:
                break
            sub = nums[right] - nums[left]
            count += sub
            right-=1
        return  count   