class Solution:
    def sortSentence(self, s: str) -> str:
        words = s.split(" ")
        sorted_words = sorted(words, key=lambda x: int(''.join(filter(str.isdigit, x))))
        res = ""

        for word in sorted_words:
            res += word[:-1] + " "
        return res.strip()


            