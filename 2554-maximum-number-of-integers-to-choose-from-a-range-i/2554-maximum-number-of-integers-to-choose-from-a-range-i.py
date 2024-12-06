class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        count = 0
        numSum = 0
        bannedSet = set(banned)

        for i in range(1,n+1):
            if(i in bannedSet):
                continue
            if(numSum + i > maxSum):
                break
            numSum += i
            count += 1
        return count