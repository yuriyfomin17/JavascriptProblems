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
 * @param {number} sum
 * @return {boolean}
 */
// Time complexity is O(N)
// in worst case the tree is completely unbalanced e.g. tree has only 1 node so the
// space complexity is O(N) where in best case where tree is completely balanced
// height of the tree is log(N) so space complexity is O log(N)
const hasPathSum = function (root, sum) {
    if (!root) {
        return false
    }
    const helper = (node, currSum) => {
        if (!node) {
            return false
        }
        currSum += node.val
        if (node.right === null && node.left === null && currSum === sum) {
            return true
        }
        let left = helper(node.left, currSum)
        let right = helper(node.right, currSum)
        return left === true || right === true
    }
    return helper(root, 0)
};

// Time complexity is O(N)
// in worst case the tree is completely unbalanced e.g. tree has only 1 node so the
// space complexity is O(N) where in best case where tree is completely balanced
// height of the tree is log(N) so space complexity is O log(N)
const hasPathSumBFS = function (root, sum) {
    if (!root) {
        return false
    }
    const queue = [[root, sum - root.val]]
    let currRemainder;
    while (queue.length !== 0) {
        let [current, remainder] = queue.shift()
        if (remainder === 0 && current.left === null && current.right === null) {
            return true
        }
        if (current.left !== null) {
            currRemainder = remainder - current.left.val
            queue.push([current.left, currRemainder])
        }
        if (current.right !== null) {
            currRemainder = remainder - current.right.val
            queue.push([current.right, currRemainder])
        }
    }
    return false
};

