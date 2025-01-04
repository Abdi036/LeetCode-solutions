class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        missingNum = []
        for i in range(1,arr[-1]+k+1):
            if i not in arr:
                missingNum.append(i)
            if len(missingNum) == k:
                break
        return missingNum[k-1]