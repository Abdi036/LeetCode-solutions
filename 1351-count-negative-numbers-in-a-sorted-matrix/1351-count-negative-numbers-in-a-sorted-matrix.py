def checkNum(arr):
        count = 0
        for i in range(len(arr)):
            if(arr[i] < 0):
                count += 1
        return count 
        
class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        totalcount = 0
        for i in range(len(grid)):
            totalcount += checkNum(grid[i])
        return totalcount
