# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: Optional[ListNode]) -> int:
         strVal = []
         while head:
            strVal.append(head.val)
            head = head.next
         decimalNumber = "".join(map(str,strVal))
         return int(decimalNumber,2)