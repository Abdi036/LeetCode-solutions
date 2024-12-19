class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        neg,pos = 0,0

        for i in range(len(nums)):
            if nums[i] == 0:
                continue
            elif nums[i] > 0:
                pos+=1
            else:
                neg+=1
        return max(pos,neg)