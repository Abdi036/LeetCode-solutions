/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
    const cont = [];
    while(head){
        cont.push(head.val);
        head = head.next;
    }
 return (cont.join("") === cont.reverse().join(""))
};