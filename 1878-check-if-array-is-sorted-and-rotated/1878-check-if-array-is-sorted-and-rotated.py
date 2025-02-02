class Solution:
    def check(self, nums: List[int]) -> bool:
        sortedNums = sorted(nums)

        if sortedNums == nums:
            return True
        
        for i in range(len(nums)):
            last = nums.pop()
            nums.insert(0, last)
            if sortedNums == nums:
                return True
        return False
