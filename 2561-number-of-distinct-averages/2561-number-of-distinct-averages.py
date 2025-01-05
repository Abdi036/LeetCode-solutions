class Solution:
    def distinctAverages(self, nums: List[int]) -> int:
        nums.sort()
        avgContainer = set()

        while len(nums) > 1:
            big = nums.pop()
            small = nums.pop(0)

            avg = (big + small) / 2
            avgContainer.add(avg)
        return len(avgContainer)
        

        