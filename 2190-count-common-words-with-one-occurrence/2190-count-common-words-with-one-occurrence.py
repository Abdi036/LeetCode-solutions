class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        counter1 = Counter(words1)
        counter2 = Counter(words2)
        count = 0

        for i in range(len(words1)):
            if words1[i] in counter2:
               if counter1[words1[i]] == 1 and  counter2[words1[i]] == 1:
                    count += 1
        return count