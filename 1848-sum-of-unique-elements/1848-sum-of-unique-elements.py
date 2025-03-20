class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        hashMap = Counter(nums)
        res = 0

        for key,val in hashMap.items():
            if val < 2:
                res += key
        return res