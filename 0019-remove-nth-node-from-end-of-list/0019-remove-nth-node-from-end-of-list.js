/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const newNode = new ListNode();
    newNode.next = head;
    let temp = newNode;
    let prev = newNode;

    for(let i = 0; i < n; i++){
        temp = temp.next;
    }

    while(temp.next){
        temp = temp.next;
        prev = prev.next;
    }
    prev.next = prev.next.next;

    return newNode.next;
};

