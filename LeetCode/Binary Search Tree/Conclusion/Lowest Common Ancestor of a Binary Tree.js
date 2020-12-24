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
// Time complexity is O(N) where N is the number of nodes
// Space complexity is O(N) where N is the sum of space taken by queue, parents and ancestors

const lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null
    }
    const parents = new Map()
    const queue = [root]
    parents.set(root, null)
    while (queue.length !== 0) {
        let currNode = queue.shift()
        if (currNode.left) {
            parents.set(currNode.left, currNode)
            queue.push(currNode.left)
        }
        if (currNode.right) {
            parents.set(currNode.right, currNode)
            queue.push(currNode.right)
        }
    }
    let commonAncestor = p
    const ancestors = new Set()
    while (commonAncestor) {
        ancestors.add(commonAncestor)
        commonAncestor = parents.get(commonAncestor)
    }
    commonAncestor = q
    while (!ancestors.has(commonAncestor)){
        commonAncestor = parents.get(commonAncestor)

    }
    return commonAncestor


};