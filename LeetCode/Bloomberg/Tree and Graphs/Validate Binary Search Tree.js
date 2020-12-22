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
 * @return {boolean}
 */
// Time Complexity is O(N) where N is the number of nodes that we need to traverse. At most we will traverse N nodes
// Space complexity is O(1) at the best case when incorrect node has right child while in worst case is O(H)
// where H is the height of the tree
const isValidBST = function (root) {
    if (!root) {
        return null
    }
    const stack = []
    let currNode = root
    let previous = null
    while (stack.length !== 0 || currNode !== null) {
        while (currNode) {
            stack.push(currNode)
            currNode = currNode.left
        }
        let removed = stack.pop()
        if(previous!==null && previous>=removed.val){
            return false
        }
        previous = removed.val
        currNode = removed.right
    }
    return true
};