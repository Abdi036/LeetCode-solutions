class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        tot_sum = 0

        for i in range(len(s)):
            if s[i] in t:
                tot_sum += (abs(i - t.index(s[i])))
        return tot_sum

        
