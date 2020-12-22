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
const searchBST = function (root, val) {
    if (!root) {
        return null
    }
    let currNode = root
    while (currNode) {
        if (val < currNode.val) {
            currNode = currNode.left
        } else if (val > currNode.val) {
            currNode = currNode.right
        }else if(currNode.val===val){
            return currNode
        }
    }
    return null
};