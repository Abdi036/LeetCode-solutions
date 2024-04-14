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
function sumOfLeftLeaves(root) {
    if(root.length === 1) return 0;
    let stack = [];
    let curNode = root;
    let sum = 0;

    while(curNode || stack.length){
      
       if(curNode){
        stack.push(curNode)
        curNode = curNode.left
       }
       else{
        curNode = stack.pop();
           if (curNode.left && !curNode.left.left && !curNode.left.right) {
                    sum += curNode.left.val;
                }
        curNode = curNode.right;
       }
    }
    return sum
};