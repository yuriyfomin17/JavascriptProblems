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
// Time Complexity is O(N) if tree is completely unbalanced and O(logN) if it is balanced
// Space Complexity is O(1) since we don't use any extra memory
const lowestCommonAncestor = function (root, p, q) {
    if(!root){
        return null
    }
    const qValue = q.val
    const pValue = p.val
    let currNode = root
    // Traverse the tree
    while (currNode) {
        let parentValue = currNode.val
        if (pValue > parentValue && qValue > parentValue) {
            // if both p and q are greater than parents
            currNode = currNode.right
        } else if (pValue < parentValue && qValue < parentValue) {
            // if both p and q are less then parents
            currNode = currNode.left
        }else {
            // we Have found the split return lowest common ancestor
            return currNode
        }
    }
    return null
};



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
    while (!ancestors.has(commonAncestor)) {
        commonAncestor = parents.get(commonAncestor)

    }
    return commonAncestor
};
