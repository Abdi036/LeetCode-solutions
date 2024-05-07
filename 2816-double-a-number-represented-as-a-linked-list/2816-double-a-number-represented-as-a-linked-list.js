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

//  linkedList to Array
function toArray(list){
    const cont = [];
    while(list){
        cont.push(list.val);
        list = list.next
    }
    return cont
}

// Array to LinkedList

function toList(arr){
    let newNode = new ListNode(0)
    let current = newNode;

    for(let i = 0; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
         current = current.next
    }
    return newNode.next
}


function doubleIt(head) {
    const res = []
    const convertedArray = toArray(head)
    let  num =  convertedArray.join("")
    let product = (BigInt(num) * BigInt(2)) + "" //convert to string to make it itrable

    for(let n of product){
        res.push(Number(n)) // itrate and push the Number to an array
    }
    return toList(res)
};