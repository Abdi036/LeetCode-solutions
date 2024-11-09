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
var maxDepth = function(root) {
    let res = []
    if(!root) return res.length
    let queue = [root]

    while(queue.length){
        let qLen = queue.length
        let level = []

        for(let i = 0; i < qLen; i++){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            level.push(node.val)
        }
        if(level.length) res.push(level)
    }
    return res.length
};