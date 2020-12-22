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
 * @param {number} val
 * @return {TreeNode}
 */
// TIme Complexity is O(logN) where N is the number of nodes
// Space Complexity is O(1) since we don't have any extra space
const insertIntoBST = function (root, val) {
    if (!root) {
        return new TreeNode(val)
    }
    let currNode = root
    let previous = null
    while (currNode) {
        previous = currNode
        if(val<currNode.val){
            currNode = currNode.left
            if(currNode===null){
                previous.left = new TreeNode(val)
                return root
            }
        }else if(val>currNode.val){
            currNode = currNode.right
            if(currNode===null){
                previous.right = new TreeNode(val)
                return root
            }
        }

    }
};