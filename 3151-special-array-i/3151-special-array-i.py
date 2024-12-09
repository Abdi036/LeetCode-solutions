class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        l,r = 0,1
        arrLen = len(nums)

        while(r < arrLen):
            if(nums[l] % 2 == 0 and nums[r] % 2 == 0 or nums[l] % 2 != 0 and nums[r] % 2 != 0):
                return False
            else:
                l += 1
                r += 1
        return True
