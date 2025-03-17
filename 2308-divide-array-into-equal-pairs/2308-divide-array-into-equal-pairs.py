class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        counter = Counter(nums)
        count = 0

        for key,val in counter.items():
            if val % 2 == 0:
                count += val
            else:
                return False
        return True