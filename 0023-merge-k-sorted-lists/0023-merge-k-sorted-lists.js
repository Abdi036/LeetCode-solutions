/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 function toArray(list){
    const container = [];
    while(list){
        container.push(list.val);
        list = list.next;
    }
    return container;
 }

 function toList(arr){
    let newNode = new ListNode();
    let current = newNode;
    for(let i = 0; i < arr.length; i++){
        current.next =  new ListNode(arr[i]);
        current = current.next;
    }
    return newNode.next;
 }

function mergeKLists(lists) {
    const container = [];
    let arrEle;
    for(let i = 0; i < lists.length; i++){
       arrEle = toArray(lists[i])
       container.push(arrEle)
    }
    const res = container.flat().sort((a,b)=>a-b);
     return toList(res)
};