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
    if (!root) {
        return []
    }
    const queue = [root]
    let current
    let size
    const result = [root.val]
    let currLevel = []
    while (queue.length !== 0) {
        size = queue.length
        currLevel = []
        for (let i = 0; i < size; i++) {
            current = queue.shift()
            if (current.left !== null) {
                currLevel.push(current.left.val)
                queue.push(current.left)
            }
            if (current.right !== null) {
                currLevel.push(current.right.val)
                queue.push(current.right)
            }
        }
        if(currLevel.length!==0){
            result.push(currLevel[currLevel.length - 1])
        }

    }
    return result
};