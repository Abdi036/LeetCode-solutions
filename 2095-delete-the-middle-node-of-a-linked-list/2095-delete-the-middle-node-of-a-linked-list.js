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
function deleteMiddle(head) {
    let temp = head;
    let jumper = head;
    let prev = null;

    while(jumper && jumper.next){
        prev = temp;
        temp = temp.next;
        jumper = jumper.next.next;
    }
    if(prev){
        prev.next = temp.next;
    }
    else{
        head = head.next
    }

    return head;
};