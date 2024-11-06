/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    const res = []
    const queue = [root]

    while(queue.length){
        let qLen = queue.length
        let level = []

        for(let i = 0; i < qLen; i++){
            let node = queue.shift()
            level.push(node.val)
            for (const child of node.children) {
                queue.push(child);
            }
        }
        if(level)res.push(level)
    }
    return res
};