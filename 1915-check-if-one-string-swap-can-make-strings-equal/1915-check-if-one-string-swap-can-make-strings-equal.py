class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
         firstIdx = 0
         secondIdx = 0
         diff = 0

         for i in range(len(s1)):
            if s1[i] != s2[i]:
                diff += 1
                if diff > 2:
                  return False
                elif diff == 1:
                 firstIdx = i
                else:
                 secondIdx = i
         return (s1[firstIdx] == s2[secondIdx] and s1[secondIdx] == s2[firstIdx])