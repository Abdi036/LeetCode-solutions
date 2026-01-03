class Solution:
    def recoverOrder(self, order: List[int], friends: List[int]) -> List[int]:

        friends = set(friends)
        return list(filter(lambda x: x in friends, order))