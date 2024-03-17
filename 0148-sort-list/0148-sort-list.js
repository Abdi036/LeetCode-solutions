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
 

function sortList(head) {
   const arr = [];
   while(head){
    arr.push(head.val);
    head = head.next
   }
arr.sort((a,b) => a - b);

let newNode = new ListNode(0);
let current = newNode;
for(let i = 0; i < arr.length; i++){
    current.next = new ListNode(arr[i]);
    current = current.next;
}

return newNode.next;
};