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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return []
    const res = []

    function traverse(curNode){
        if(curNode.left) traverse(curNode.left)
        res.push(curNode.val)
        if(curNode.right) traverse(curNode.right)
    }
    traverse(root)
    return res
};