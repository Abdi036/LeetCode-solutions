class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def findLeft(arr,targ):
            left = 0
            right = len(arr) - 1

            while left <= right:
                mid = (left + right) // 2

                if arr[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return left

        def findRight(arr,targ):
            left = 0
            right = len(arr) - 1

            while left <= right:
                mid = (left + right) // 2

                if arr[mid] <= target:
                    left = mid + 1
                else:
                    right = mid - 1
            return right

        start = findLeft(nums,target)
        end = findRight(nums,target)
        if start <= end and start <= len(nums) and nums[start] == target and nums[end] == target:
            return [start,end]
        else:
            return [-1,-1] 
