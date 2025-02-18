class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        hashSet = set()
        maxLength = 0

        for i in range(len(s)):
            while s[i] in hashSet:
                hashSet.remove(s[l])
                l += 1
            width = (i - l) + 1
            maxLength = max(maxLength,width)
            hashSet.add(s[i])
        return maxLength

