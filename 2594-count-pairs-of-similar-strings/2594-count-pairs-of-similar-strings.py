class Solution:
    def similarPairs(self, words: List[str]) -> int:
        count = 0

        for i,word1 in enumerate(words):
            for word2 in words[i+1:]:
                if set(word1) == set(word2):
                    count += 1
        return count
