class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        ans = 0
        prev = 0
        cur = 1

        for i in range(1,len(s)):
            if s[i - 1] == s[i]:
                cur += 1
            else:
                ans += min(prev,cur)
                prev = cur
                cur = 1
        return ans + min(prev,cur)