/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
   let newNode = new ListNode(0);
   let temp = newNode;
   newNode.next = head;

   while(temp.next){
    if(temp.next.val === val){
        temp.next = temp.next.next;
    }
    else{
        temp = temp.next;
     }
   }
   return newNode.next
}