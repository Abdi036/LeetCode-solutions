class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        if (len(nums) % 2)!= 0:
            return False

        hashMap = Counter(nums)

        for key,val in hashMap.items():
            if val > 2:
                return False
        return True