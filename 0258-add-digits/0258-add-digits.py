class Solution:
    def addDigits(self, num: int) -> int:
        res = list(str(num))
        totalSum = sum(int(digit) for digit in res)
        if len(str(totalSum)) == 1:
            return totalSum
        return self.addDigits(totalSum)
        