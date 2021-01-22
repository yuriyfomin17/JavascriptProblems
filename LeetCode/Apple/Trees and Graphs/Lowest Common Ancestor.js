/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Time Complexity is O(N) since we visit each node exactly once
    // Space Complexity is O(N) since we store at most N nodes
const lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null
    }
    const dict = new Map()
    const queue = [root]
    while (queue.length) {
        let firstElem = queue.shift()
        if (firstElem.left) {
            queue.push(firstElem.left)
            dict.set(firstElem.left, firstElem)
        }
        if (firstElem.right) {
            queue.push(firstElem.right)
            dict.set(firstElem.right, firstElem)
        }
    }
    let commonAncestor = p
    const set = new Set()
    while (commonAncestor) {
        set.add(commonAncestor)
        commonAncestor = dict.get(commonAncestor)
    }
    commonAncestor = q
    while (!set.has(commonAncestor)) {
        commonAncestor = dict.get(commonAncestor)
    }
    return commonAncestor
};
// Time Complexity is O(N) since we visit each node exactly once
// Space Complexity is O(N) since we store at most N nodes
const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (!left) return right  // p and q are in the right subtree
    if (!right) return left  // p and q are in the left subtree
    return root              // p is in one side and q is in the other
};