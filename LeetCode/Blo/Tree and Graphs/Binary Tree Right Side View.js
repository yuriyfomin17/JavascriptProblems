function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : null)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Time Complexity is O(N) where N is the number of nodes
//Space complexity is O(D) where D is the diameter  of the tree
    // This could contain at most N/2 nodes in case of complete binary tree
const rightSideView = function (root) {
    if(!root){
        return []
    }
    const queue = [root]
    const result = []
    while (queue.length !== 0) {
        let size = queue.length
        let previous = null
        for (let i = 0; i < size; i++) {
            let currentNode = queue.shift()
            previous = currentNode.val
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        result.push(previous)
    }
    return result
};