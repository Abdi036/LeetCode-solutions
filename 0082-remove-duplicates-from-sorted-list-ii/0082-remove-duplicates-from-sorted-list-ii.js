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
function deleteDuplicates(head){
    let newNode = new ListNode();
    newNode.next = head;
    let prev = newNode;

    while(head){
        if(head.next !== null && head.val === head.next.val){
            while(head.next !== null && head.val === head.next.val){
                head = head.next;
            }
            prev.next = head.next;
        }else{
            prev = prev.next;
        }
        head = head.next;
    }
    return newNode.next;
};