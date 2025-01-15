class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        length = len(arr)
        idx = 0

        while idx < length:
            if arr[idx] == 0:
                arr.insert(idx + 1,0)
                arr.pop()
                idx += 1
            idx += 1
                
            