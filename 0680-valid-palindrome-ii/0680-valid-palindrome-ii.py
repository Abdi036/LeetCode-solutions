class Solution:
    def validPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        
        def isPalindrome(s,l,r):
            while l < r:
                if s[l] == s[r]:
                    l += 1
                    r -= 1
                else:
                    return False
            return True
        
        while left < right:

            if s[left] == s[right]:
                left += 1
                right -= 1
            else:
                return isPalindrome(s,left + 1,right) or isPalindrome(s,left,right - 1)
        return True
