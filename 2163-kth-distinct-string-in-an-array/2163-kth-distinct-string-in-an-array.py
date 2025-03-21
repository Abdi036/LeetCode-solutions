class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        hashMap = Counter(arr)
        count = 0

        for word in arr:
            if hashMap[word] == 1:
                count += 1
                if count == k:
                    return word
        return ""