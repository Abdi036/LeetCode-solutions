class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        flatList = list(itertools.chain.from_iterable(grid))
        res = []
        totalNum = len(flatList)
        hashSet = set()

        for num in flatList:
            if num in hashSet:
                res.append(num)
            else:
                hashSet.add(num)
        
        missingNum = totalNum - len(hashSet)

        if missingNum > 0:
            for i in range(1,totalNum + 1):
                if i not in hashSet:
                    res.append(i)
        return res