class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
         expo = 0

         while pow(2,expo) < n:
            expo += 1
         return True if pow(2,expo) == n else False

        