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
//  function 1
 function toArray(list){
    let container = [];
    while(list){
        container.push(list.val);
        list = list.next
    }
    return container;
 }

//  function 2
function toList(arr){
    let newNode = new ListNode(0);
    let current = newNode;
    for(let i = 0; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return newNode.next;
}

// fucntion 3
function subArray(arr,k){
    const container = [];
    for(let i = 0; i < arr.length; i+=k){
        container.push(arr.slice(i,i+k));
    }

     for(let i = 0; i < container.length; i++){
        container[i].reverse();
    }
    return container.flat();
}

function swapPairs(head) {
    const array = toArray(head);
    const reversedArray = subArray(array,2);
    return toList(reversedArray);
};