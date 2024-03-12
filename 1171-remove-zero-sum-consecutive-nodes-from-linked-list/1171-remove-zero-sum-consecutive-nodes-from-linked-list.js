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
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function removeZeroSumSublists(head) {
    // converting the linkedList to an array
    let array = [];
    let list = head;
    while(list){
        array.push(list.val)
        list = list.next;
    }

    let deleted = true;

    while(deleted){
        deleted = false;
        let sum = 0;
        let prevSum = new Map();
        prevSum.set(0,-1);

        for(let i = 0; i < array.length; i++){
            sum += array[i]
            if(prevSum.has(sum)){
                let startIndex = prevSum.get(sum) + 1;
                array.splice(startIndex, i - startIndex + 1);
                deleted = true;
                break;
            }
             prevSum.set(sum, i);
        }

    }
    let dummy = new ListNode(0);
    let currNode = dummy;
    for (let i = 0; i < array.length; i++) {
        currNode.next = new ListNode(array[i]);
        currNode = currNode.next;
    }

    return dummy.next;

};