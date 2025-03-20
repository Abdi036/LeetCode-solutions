class Solution:
    def repeatedCharacter(self, s: str) -> str:
        hashSet = set()

        for char in s:
            if char in hashSet:
                return char
            else:
                hashSet.add(char)
        