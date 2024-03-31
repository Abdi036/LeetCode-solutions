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

function GCD(a,b){
    if(!b) return a;
    return GCD(b,a % b)
}

function insertGreatestCommonDivisors(head) {
    let newNode = new ListNode(0)
        newNode.next = head;
    while(head && head.next){
        let temp = head.next;
        let resultofGcd = new ListNode(GCD(head.val,temp.val));
        head.next = resultofGcd;
        resultofGcd.next = temp;
        head = temp;
        temp = temp.next
    }
    return newNode.next;
};