class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        minNum = float('inf')
        words = sentence.split(" ")

        for i in range(len(words)):
            if(words[i].startswith(searchWord)):
                minNum = min(i+1,minNum)
        return minNum if minNum != float('inf') else -1 