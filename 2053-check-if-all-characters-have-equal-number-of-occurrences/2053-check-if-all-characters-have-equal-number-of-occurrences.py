class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        hashMap = Counter(s)
        freq = list(hashMap.values())
         
        for key,val in hashMap.items():
            if val != freq[0]:
                return False
        return True

