class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
         if len(s) < k:
            return False

         hash_map = {}
         count = 0

         for char in s:
            if char in hash_map:
                hash_map[char] += 1
            else:
                hash_map[char] = 1
        
         for value in hash_map.values():
            if value % 2 != 0:
              count += 1
         if count > k:
            return False
         else:
            return True
            
            
