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
//time complexity is O(n) since we visit each node exactly once
// space complexity is O(n) where in worst cases N is equal to the tree Height H
const postorderTraversal = function (root) {
    if (!root) {
        return []
    }
    const stack = [root]
    const result = []
    let current = root

    while (stack.length !== 0 ) {
        current = stack.pop()
        result.push(current.val)
        if (current.left !== null) {
            stack.push(current.left)
        }
        if (current.right !== null) {
            stack.push(current.right)
        }
    }
    return result.reverse()

};