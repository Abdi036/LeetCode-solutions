class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        domino_count = {}
        pairs = 0
        
        for a, b in dominoes:
            key = tuple(sorted([a, b]))
            if key in domino_count:
                pairs += domino_count[key]
                domino_count[key] += 1
            else:
                domino_count[key] = 1
                
        return pairs