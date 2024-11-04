/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0

    let queue = [root]
    let depth = 0;

    while(queue.length){
        let qLen = queue.length;
        depth++
        for(let i = 0; i < qLen; i++){
            let curNode = queue.shift()
            for(let child of curNode.children){
                queue.push(child)
            }
        }
    }

 return depth 
};