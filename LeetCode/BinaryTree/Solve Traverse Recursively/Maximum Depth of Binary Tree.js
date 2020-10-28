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

// 1. return if root is null
// 2. if root is a leaf node:
// 3.      answer = max(answer, depth)         // update the answer if needed
// 4. maximum_depth(root.left, depth + 1)      // call the function recursively for left child
// 5. maximum_depth(root.right, depth + 1)     // call the function recursively for right child
// Top-down approach
// Time complexity is O(N) where N is the number of nodes since we visit each node 1 time
const maxDepth = function (root) {
    let result = 1
    if (!root) {
        return 0
    }
    const helper = (node, depth) => {
        if (node !== null) {
            result = Math.max(result, depth)
            helper(node.left, depth + 1)
            helper(node.right, depth + 1)
        }

    }
    helper(root, 1)
    return result
};

// 1. return 0 if root is null                 // return 0 for null node
// 2. left_depth = maximum_depth(root.left)
// 3. right_depth = maximum_depth(root.right)
// 4. return max(left_depth, right_depth) + 1  // return depth of the subtree rooted at root
//Bottom-Up
const maxDepth2 = function (root) {
    if (!root) {
        return 0
    }
    const maxDepth = (root) => {
        if (!root) return 0
        let left = maxDepth(root.left)
        let right = maxDepth(root.right)
        return Math.max(left, right) + 1
    };
    return maxDepth(root)
};

//BFS
//time complexity O(N) where N is the number of nodes
//size Complexity is O(N) where N is the number of nodes at queue
const maxDepth3 = function (root) {
    if(!root){return []}
    const queue = [root]
    let size;
    let count = 0
    let current;
    while (queue.length !== 0) {
        size = queue.length
        for (let i = 0; i < size; i++) {
            current = queue.shift()
            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        count += 1
    }
    return count
};
