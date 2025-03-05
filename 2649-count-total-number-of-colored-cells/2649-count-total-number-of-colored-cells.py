class Solution:
    def coloredCells(self, n: int) -> int:
        res = 0

        for i in range( n + 1 ):
            res = (n *n) + ((n-1)*(n-1))
        return res