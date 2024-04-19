/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function toArray(list){
    let arr = [];
    while(list){
        arr.push(list.val);
        list = list.next
    }
    return arr;
 }

 function toList(arr){
    let curNode = new ListNode(0);
    let dummy = curNode;
    for(let i = 0; i < arr.length; i++){
        curNode.next = new ListNode(arr[i]);
        curNode = curNode.next;
    }
    return dummy.next
 }

function addTwoNumbers(l1, l2) {
    const arr1 = toArray(l1); 
    const arr2 = toArray(l2);
    const maxLength = Math.max(arr1.length,arr2.length)
    let sum = 0;
    let carry = 0;
    let sumArr = []; 

for(let i = 0; i < maxLength; i++){
        sum = (arr1[i] || 0) + (arr2[i] || 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        sumArr.push(sum % 10);
    }
    if(carry){
        sumArr.push(carry)
    }
  return toList(sumArr)
};