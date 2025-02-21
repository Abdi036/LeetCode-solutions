class Solution:
    def pivotInteger(self, n: int) -> int:
        leftSum = 0
        total = sum(range(1,n + 1))

        for i in range(1,n+1):
            rightSum = total - leftSum - i
            if leftSum == rightSum:
                return i
            leftSum += i
        return -1