class Solution:
    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:
        res = []

        for i in range(len(nums)):
          for j in range(i, len(nums)):  
            indxDiff = abs(i - j)
            valDiff = abs(nums[i] - nums[j])
            if indxDiff >= indexDifference and valDiff >= valueDifference:
                res.append(i)
                res.append(j)
        return [-1,-1] if len(res) == 0 else res