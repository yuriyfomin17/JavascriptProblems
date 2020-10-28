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
// Time complexity is O(N) where N is the number of nodes in a tree
// Space complexity is O(N)   where N is the size of the queue
const levelOrder = function (root) {
    if (!root) {
        return []
    }
    const queue = [root]
    const result = []
    let current;
    let size;
    let currArr
    while (queue.length !== 0) {
        size = queue.length
        currArr = []
        for (let i = 0; i < size; i++) {
            current = queue[0]
            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
            queue.shift()
            currArr.push(current.val)
        }
        result.push(currArr)
    }
    return result

};