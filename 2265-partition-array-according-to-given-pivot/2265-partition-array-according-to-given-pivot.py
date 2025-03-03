class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        lessPivot = []
        greatPivot = []
        equalPivot = []
         
        for i in range(len(nums)):
            if nums[i] < pivot:
                lessPivot.append(nums[i])
            elif nums[i] == pivot:
                equalPivot.append(nums[i])
            else:
                greatPivot.append(nums[i])

        nums = lessPivot + equalPivot + greatPivot
        return nums