class Solution:
    def countPartitions(self, nums: List[int]) -> int:
         
        count = 0

        for i in range(len(nums)-1):
            left = nums[0:i+1]
            right = nums[i+1:]
            
            leftSum = sum(left)
            rightSum = sum(right)

            if (leftSum - rightSum) % 2 == 0:
                count += 1
        return count
         
        