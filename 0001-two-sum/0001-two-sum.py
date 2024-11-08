class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}

        for i,num in enumerate(nums):
             complement = target - nums[i]
             if(complement in hashMap):
                return [hashMap[complement],i]
             else:
                hashMap[num] = i
        return []   