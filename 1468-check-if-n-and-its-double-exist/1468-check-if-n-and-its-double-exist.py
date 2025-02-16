class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        hashMap = {}

        for num in arr:
            if num in hashMap:
                hashMap[num] += 1
            else:
                hashMap[num] = 1

        for num in arr:
            if num != 0 and (2 * num) in hashMap:
                return True
            if num == 0 and hashMap[num] > 1:
                return True
        return False
        

