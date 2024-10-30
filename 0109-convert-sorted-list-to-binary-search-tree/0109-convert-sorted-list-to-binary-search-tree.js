/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function toArray(list){
   let arr = []
   let cur = list
   while(cur){
        arr.push(cur.val)
        cur = cur.next
   }
   return arr
 } 

function toBST(arr){
    if(arr.length === 0) return null
    let mid = Math.floor(arr.length/2)

    let newNode = new TreeNode(arr[mid])
    newNode.left = toBST(arr.slice(0,mid))
    newNode.right = toBST(arr.slice(mid + 1))

    return newNode
}
var sortedListToBST = function(head) {
    const arr = toArray(head)
    return toBST(arr)
};