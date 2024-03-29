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
function reverseList(head) {
    let temp = head;
    let prev = null;

    while(temp !== null){
        let next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    return prev;
};