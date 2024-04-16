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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
    let sum = 0;
    let stack = [];
    let curNode = root;

    while(curNode || stack.length){
        if(curNode){
            stack.push(curNode)
            curNode = curNode.left;
        }else{
            curNode = stack.pop();
             if(curNode.val >= low && curNode.val <= high){
                sum += curNode.val
            }
            curNode = curNode.right;

        }
    }
    return sum;
};