/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var getMinimumDifference = function(root) {
    let min = Infinity;
    let prev = null
    function traverseInorder(node){
        if(!node) return

        traverseInorder(node.left)

        if(prev !== null){
            min = Math.min(min,Math.abs(node.val - prev))
        }
        prev = node.val
        traverseInorder(node.right)
   }
    traverseInorder(root)
 return min
};