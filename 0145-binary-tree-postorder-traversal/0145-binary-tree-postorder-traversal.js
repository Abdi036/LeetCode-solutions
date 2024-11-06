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
var postorderTraversal = function(root) {
    if(!root) return []

    const res = []

    function traverse(curNode){
        if(curNode.left) traverse(curNode.left)
        if(curNode.right) traverse(curNode.right)
        res.push(curNode.val)
    }
    traverse(root)
    return res
};