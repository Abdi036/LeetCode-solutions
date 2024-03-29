/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// function 1
function toArray(list){
    let container = [];
    while(list){
        container.push(list.val);
        list = list.next;
    }
    return container;
}

// function 2
function toList(arr){
    let newNode = new ListNode();
    let current = newNode;
    for(let i = 0; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return newNode.next;
}

// function 2
function subGroupArray(arr,k){
         let container = [];
        for(let i = 0; i < arr.length; i+=k){
            container.push(arr.slice(i,i+k));
        }
        return container;       
    }

// main function
function reverseKGroup(head, k) {
   const array = toArray(head);
   const subgroup = subGroupArray(array,k);
   
   for(let i = 0; i < subgroup.length; i++){
    if(subgroup[i].length === k){
        subgroup[i].reverse();
      }
   }
return toList(subgroup.flat());
};