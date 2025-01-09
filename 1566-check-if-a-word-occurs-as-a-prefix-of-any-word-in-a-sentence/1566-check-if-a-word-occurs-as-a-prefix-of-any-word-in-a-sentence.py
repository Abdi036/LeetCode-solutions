class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        minIndex = float("inf")
        arrSentence = sentence.split()

        for i in range(len(arrSentence)):
            if arrSentence[i].startswith(searchWord):
                minIndex = min(minIndex,i+1)
        return minIndex if minIndex != float("inf") else -1