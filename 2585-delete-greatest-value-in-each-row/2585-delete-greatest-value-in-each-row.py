class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        res = 0
    
        for row in grid:
            row.sort()
        
        for col in range(len(grid[0])):
            max_value = -float("inf")
            for row in grid:
                 max_value = max(max_value, row[col])
            res += max_value
        
        return res