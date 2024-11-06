/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root) return []
    const res = []
    function traverse(curNode){
        for(let child of curNode.children){
            traverse(child)
        }
        res.push(curNode.val)
    }
    traverse(root)
    return res
};