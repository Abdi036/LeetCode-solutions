class Solution:
    def isPalindrome(self, x: int) -> bool:
        res = str(x)
        right = len(res)-1
        left = 0

        while(left < right):
            if res[left] != res[right]:
                return False
            else:
                right -= 1
                left += 1
        return True
