# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # reverse the original list
        def reverseList(lst):
            prev = None
            cur = lst

            while cur:
                nxt = cur.next
                cur.next = prev
                prev = cur
                cur = nxt
            return prev 

        reversedList = reverseList(head)
        newHead = None
        cur = None
        maxVal = float("-inf")

        while reversedList:
            if reversedList.val >= maxVal:
                maxVal = reversedList.val
                newNode = ListNode(reversedList.val)
                if newHead is None:
                    newHead = newNode
                    cur = newNode
                else:
                    cur.next = newNode
                    cur = cur.next
            reversedList = reversedList.next

        return reverseList(newHead)