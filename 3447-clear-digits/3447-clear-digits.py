class Solution:
    def clearDigits(self, s: str) -> str:
        result = []
        
        for char in s:
            if not char.isdigit():
                result.append(char)
            else:
                result.pop()
        return "".join(result)