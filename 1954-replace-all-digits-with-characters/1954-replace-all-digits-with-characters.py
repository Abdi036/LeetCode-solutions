class Solution:
    def replaceDigits(self, s: str) -> str:
      res = ""

      for i in range(len(s)):
        if s[i].isalpha():
           res += s[i]
        else:
            ascii_letter =   ord(s[i-1]) + int(s[i])
            letter = chr(ascii_letter)
            res += letter
      return res