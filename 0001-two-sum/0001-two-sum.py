class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
         hashMap = {}

         for i in range(len(nums)):
            hashMap[nums[i]] = i

         for i in range(len(nums)):
            num = target - nums[i]

            if num in hashMap and hashMap[num] != i:
                return [i,hashMap[num]]
         return []