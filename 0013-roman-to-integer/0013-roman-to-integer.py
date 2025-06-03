class Solution:
    def romanToInt(self, s: str) -> int:
        romanValues = {
         'I':1,
         'V':5,
         'X':10,
         'L':50,
         'C':100,
         'D':500,
         'M':1000
        }
        res = 0
        for i in range(len(s)):
            curVal = romanValues.get(s[i])

            if i < len(s) - 1 and curVal < romanValues[s[i + 1]]:
                res -= curVal
            else:
                res += curVal
        return res

        