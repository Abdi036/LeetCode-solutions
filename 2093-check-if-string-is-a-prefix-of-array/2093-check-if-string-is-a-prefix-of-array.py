class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        word = ""

        for i in range(len(words)):
            word += words[i]
            if word == s:
                return True
        return False