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
 * @param {number} target
 * @return {number}
 */
// Time Complexity is O(H) where H is the height of the tree since we go from root to leaf
// Space Complexity is O(1)
const closestValue = function (root, target) {

    let closest = root.val
    while (root) {
        let currVal = root.val
        closest = Math.abs(currVal - target) < Math.abs(closest - target) ? currVal : closest
        root = target < root.val ? root.left : root.right
    }
    return closest
};