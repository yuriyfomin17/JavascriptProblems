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
// Time Complexity is O(N) since we visit each node exactly once
    // Space Complexity is O(N) since we store N number of nodes at queue
const maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let count = 0
    const queue = [root]
    while (queue.length !== 0) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let firstElem = queue.shift()
            if (firstElem.left) {
                queue.push(firstElem.left)
            }
            if (firstElem.right) {
                queue.push(firstElem.right)
            }
        }
        count += 1
    }
    return count
};