class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        # [2,3,5,10]
        arr.sort()
        
        def BS(nums,tar):
            l = 0
            r = len(arr) - 1

            while l <= r:
                mid = (l + r) // 2

                if(nums[mid] == tar):
                    return mid
                elif(nums[mid] > tar):
                    r = mid - 1
                else:
                    l = mid + 1
            return -1


# [-19,-8,-2,0,4,6,10]
        for i in range(len(arr)):
            target = (arr[i] * 2)
            res = BS(arr,target)
            
            if(res >= 0 and res != i):
                return True
            else:
                continue
        return False
            