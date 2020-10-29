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
//
// 1. return 0 if root is null                 // return 0 for null node
// 2. left_depth = maximum_depth(root.left)
// 3. right_depth = maximum_depth(root.right)
// 4. return max(left_depth, right_depth) + 1  // return depth of the subtree rooted at root
const countUnivalSubtreesBFS = function (root) {
    if (!root) {
        return 0
    }
    // Time Complexity in worst case is O(N) where N is number of nodes. if all the tree is Unival
    // it means we need to pass through every node
    // Space Complexity is O(H) where H is the height of the tree. Each recursive call is takes time to
    // to reach the end of the leaf so in worst cas it takes longest path from root to the leaf
    const isUni = (root) => {
        if (root === null) {
            return true
        }
        if (root.left !== null && root.left.val !== root.val) {
            return false
        }
        if (root.right !== null && root.right.val !== root.val) {
            return false
        }
        return isUni(root.right) && isUni(root.left);

    }
    const queue = []
    let current = root
    let count = 0
    while (queue.length !== 0 || current !== null) {
        while (current !== null) {
            queue.push(current)
            if (isUni(current)) {
                count += 1
            }
            current = current.left
        }
        current = queue.shift()
        current = current.right

    }
    return count
}

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
// Time Complexity is O(n^2) since we are traversing each node twice. More efficient is to use
// Bottom-up solution.
// Space Complexity is is O(N*H)    where N is number of node and H is the height of the tree

const countUnivalSubtrees = function (root) {
    if (!root) {
        return 0
    }
    let count = 0
    const helper = (node) => {
        if (node === null) {
            return true
        }
        if (node.left !== null && node.left.val !== node.val) {
            return false
        }
        if (node.right !== null && node.right.val !== node.val) {
            return false
        }
        return helper(node.left) && helper(node.right)
    }

    const traverseTree = (node) => {
        if (node) {
            if (helper(node)) {
                count += 1
            }
            traverseTree(node.left)
            traverseTree(node.right)
        }
    }
    traverseTree(root)
    return count

};