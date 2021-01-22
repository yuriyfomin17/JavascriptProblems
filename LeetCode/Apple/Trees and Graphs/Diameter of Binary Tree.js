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
// Time Complexity is O(N) since we visit every node
    // Space complexity is O(N) which is equal to our implicit call stack during during our
    // depth first search
const diameterOfBinaryTree = function (root) {
    let answer = 1
    const helper = (node) => {
        if (node === null) {
            return 0
        }
        let left = helper(node.left)
        let right = helper(node.right)
        answer = Math.max(answer, left + right + 1)
        return Math.max(left, right) + 1
    }
    helper(root)
    return answer - 1
};