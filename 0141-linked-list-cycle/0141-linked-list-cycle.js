/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 function hasCycle(head) {
    let jumper = head;

    while(jumper && jumper.next){
        head = head.next;
        jumper = jumper.next.next;
        if(head === jumper) return true;
    }
    return false;
 }