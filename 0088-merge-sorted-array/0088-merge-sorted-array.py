class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        res = []

        for i in range(m):
            res.append(nums1[i])
        for j in range(n):
            res.append(nums2[j])
        res.sort()
        for k in range(len(res)):
            nums1[k] = res[k]
