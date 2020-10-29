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
// Time complexity is O(N) where N is the number of nodes in binary tree
// Space complexity is O(N) where we need to insert O(N) nodes in the queue
const isSymmetric = function (root) {
    if (!root) {
        return true
    }
    const queue = [root.left, root.right]
    let node1;
    let node2;
    while (queue.length !== 0) {
        node1 = queue.shift()
        node2 = queue.shift()
        if (node1 === null && node2 === null) {
            continue
        }
        if (node1 === null || node2 === null) {
            return false
        }

        if (node1.val === node2.val) {
            queue.push(node1.left)
            queue.push(node2.right)
            queue.push(node1.right)
            queue.push(node2.left)
        } else {
            return false
        }
    }
    return true
};
const isSymmetricRecursion = function (root) {
    if (!root) {
        return true
    }
    const helper = (node1, node2) => {
        if (node1 === null && node2 === null) {
            return true
        }
        if (node1 === null || node2 === null) {
            return false
        }
        return node1.val === node2.val && helper(node1.left, node2.right) && helper(node1.right, node2.left)

    }
    return helper(root.left, root.right)
};