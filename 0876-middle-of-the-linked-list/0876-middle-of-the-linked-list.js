/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let temp = head;
  let jumper = head;

  while(jumper && jumper.next){
      temp = temp.next;
      jumper = jumper.next.next;
  }
  return temp;

};