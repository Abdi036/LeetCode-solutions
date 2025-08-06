class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res = ""
        minStr = min(len(word1),len(word2))
    

        for i in range(minStr):
            res += word1[i] 
            res += word2[i]
        if len(word1) > len(word2):
            res += word1[minStr:]
        else:
            res += word2[minStr:]
        return res