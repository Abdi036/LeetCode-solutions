class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        lenunique = len(set(candyType))
        halflen = len(candyType)//2
        return lenunique if lenunique<halflen else halflen