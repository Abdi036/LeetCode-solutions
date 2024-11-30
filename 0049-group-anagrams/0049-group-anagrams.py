class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashMap = {}

        for s in strs:
            sorted_str = ''.join(sorted(s))
            if sorted_str not in hashMap:
                hashMap[sorted_str] = []
            hashMap[sorted_str].append(s)
        
        return list(hashMap.values())

        