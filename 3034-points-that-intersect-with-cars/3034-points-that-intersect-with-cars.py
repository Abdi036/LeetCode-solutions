class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        arr = []

        for i in range(len(nums)):
            for j in range(nums[i][0],nums[i][1]+1):
                if j not in arr:
                    arr.append(j)
        return len(arr)
      
                