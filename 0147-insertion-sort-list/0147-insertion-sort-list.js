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

// Insertion sort

// function insertionSort(arr){
//     let temp;
//     for(let i = 1;  i < arr.length; i++){
//         temp = arr[i];
//         for(var j = i - 1; arr[j] > temp && j > -1; j--){
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = temp;
//     }

//     return arr;
// }

function insertionSortList(head) {
    const container = [];

    while(head){
        container.push(head.val);
        head = head.next;
    }

    container.sort((a,b) => a-b)

    let newNode = new ListNode(0);
    let temp = newNode;

    for(let i = 0; i < container.length; i++){
        temp.next = new ListNode(container[i]);
        temp = temp.next;
    }
    return newNode.next;
};