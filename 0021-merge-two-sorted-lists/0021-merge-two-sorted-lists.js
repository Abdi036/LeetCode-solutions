/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//  function to convert linkedlist to array
 function toArray(list){
    let container = [];
    while(list){
       container.push(list.val);
       list = list.next; 
    }
    return container;
 }

// funtion to convert array to linkedList
 function toList(arr){
    let newNode = new ListNode(0);
    let current = newNode;
    for(let i = 0; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return newNode.next;
 }
 
//  function to merge two lists
 function mergeTwoLists(list1, list2) {
    let arrList1 = toArray(list1);
    let arrList2 = toArray(list2);
    let sortedArr = [...arrList1,...arrList2];
    let res = sortedArr.sort((a,b)=>a-b);
    return toList(res);
};