# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        dummyNode = ListNode()
        cur = dummyNode

        while l1 or l2 or carry:
            sumVal = carry

            if l1:
                sumVal += l1.val
                l1 = l1.next
            if l2:
                sumVal += l2.val
                l2 = l2.next
            carry = sumVal // 10
            cur.next = ListNode(sumVal % 10)
            cur = cur.next
        return dummyNode.next
             