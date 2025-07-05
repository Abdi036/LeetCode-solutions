class Solution:
    def findLucky(self, arr: List[int]) -> int:
        counter = Counter(arr)
        max_freq = 0

        for [key,val] in counter.items():
            if key == val:
              max_freq = max(key,max_freq)
        return(-1 if max_freq == 0 else max_freq)