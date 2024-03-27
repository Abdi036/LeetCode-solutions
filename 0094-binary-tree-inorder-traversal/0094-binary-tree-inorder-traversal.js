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
function inorderTraversal(root) {
    if(!root) return [];
    let curNode = root;
    let stack = [];
    let tree = [];

    while(curNode || stack.length){
        if(curNode){
            stack.push(curNode)
            curNode = curNode.left;
        }else{
            curNode = stack.pop();
            tree.push(curNode.val);
            curNode = curNode.right;
        }
    }
    return tree;
};