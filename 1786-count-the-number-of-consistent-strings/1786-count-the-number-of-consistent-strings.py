class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        hashSet = set(allowed)
        count = 0

        for i in range(len(words)):
            for char in words[i]:
                if char not in hashSet:
                    count += 1
                    break
        return len(words) - count