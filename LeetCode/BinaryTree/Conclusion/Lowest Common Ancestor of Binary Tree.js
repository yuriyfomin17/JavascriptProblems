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
    const queue = [root]
    let current
    const parents = new Map()
    parents.set(root, null)
    while (!parents.has(p) || !parents.has(q)) {
        current = queue.shift()

        if (current.left !== null) {
            parents.set(current.left, current)
            queue.push(current.left)
        }
        if (current.right !== null) {
            parents.set(current.right, current)
            queue.push(current.right)
        }
    }
    const ancestors = new Set()
    let currAncestor = p
    while (currAncestor) {
        ancestors.add(currAncestor)
        currAncestor = parents.get(currAncestor)
    }
    let commonAncestor = q
    while (!ancestors.has(commonAncestor)) {
        commonAncestor = parents.get(commonAncestor)
    }
    return commonAncestor
};
const lowestCommonAncestor2 = function (root, p, q) {
    if (!root) {
        return null
    }
    let left = false
    let right = false
    let common = false
    const helper = (node) => {
        if(!node){
            return null
        }

        helper(node.left)
        helper(node.right)


    }

};