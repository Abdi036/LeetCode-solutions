# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        cur = head

        while cur and cur.next:
            head = head.next
            cur = cur.next.next

            if head == cur:
                return True
        return False