class Solution:
    def minimumLength(self, s: str) -> int:
        hash_map = {}

        for char in s:
            if char in hash_map:
              hash_map[char] += 1
            else:
                hash_map[char] = 1 
        values = list(hash_map.values())

        for i in range(len(values)):
            if values[i] >= 3:
                while values[i] >= 3:
                   values[i] -= 2
        return sum(values)
        
                