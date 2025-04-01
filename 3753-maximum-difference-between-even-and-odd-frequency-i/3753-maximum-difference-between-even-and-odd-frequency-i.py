class Solution:
    def maxDifference(self, s: str) -> int:
        counter = Counter(s)
        maxOdd = 0
        maxEven = 0
        res = float("-inf")
        for val,key in counter.items():
            if key % 2 != 0:
                maxOdd = max(key,maxOdd)
        
        for val,key in counter.items():
            if key % 2 == 0:
                 res = max(res,(maxOdd - key))
        return res