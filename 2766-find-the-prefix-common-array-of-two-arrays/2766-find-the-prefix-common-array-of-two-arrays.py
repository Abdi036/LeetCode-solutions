class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        arrLen = len(A)
        res = [0] * arrLen

        ele_A,ele_B = set(),set()

        for i in range(arrLen):
            ele_A.add(A[i])
            ele_B.add(B[i])

            count = 0
            for element in ele_A:
                if element in ele_B:
                    count += 1
            res[i] = count
        return res