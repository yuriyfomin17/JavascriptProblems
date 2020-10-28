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
// Time complexity is O(n) where n is number of nodes
// Space complexity is O(n) where can be equal to the height of the tree in worst cases
const inorderTraversal = function (root) {
    if (!root) {
        return []
    }
    const stack = []
    let current = root
    const result = []
    while (stack.length !== 0 || current !== null) {
        while (current !== null) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        result.push(current.val)
        current = current.right
    }
    return result

};