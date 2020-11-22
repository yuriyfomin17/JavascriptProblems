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
 * @return {number[]}
 */
const rightSideView = function (root) {
    if(!root){
        return null
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