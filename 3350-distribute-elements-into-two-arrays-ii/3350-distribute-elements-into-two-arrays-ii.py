class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        sort1, sort2 = SortedList([nums[0]]), SortedList([nums[1]])
        arr1 = [nums[0]]
        arr2 = [nums[1]]

        for i in range(2, len(nums)):
            arrCounter1 = len(sort1) - sort1.bisect_right(nums[i])
            arrCounter2 = len(sort2) - sort2.bisect_right(nums[i])

            if arrCounter1 > arrCounter2:
                arr1.append(nums[i])
                sort1.add(nums[i])
            elif arrCounter1 < arrCounter2:
                arr2.append(nums[i])
                sort2.add(nums[i])
            else:
                if len(arr1) > len(arr2):
                    arr2.append(nums[i])
                    sort2.add(nums[i])
                else:
                    arr1.append(nums[i])
                    sort1.add(nums[i])

        return arr1 + arr2