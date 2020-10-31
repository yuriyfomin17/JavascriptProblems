/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// Time Complexity is O(N) where N is the number of nodes to traverse
// Space Complexity is O(N) where N is the size of the queue
const serialize = function (root) {
    if (!root) {
        return ''
    }
    const queue = [root]
    let size
    const result = [root.val]
    let current
    while (queue.length !== 0) {
        size = queue.length
        for (let i = 0; i < size; i++) {
            current = queue.shift()
            if (current.left !== null) {
                result.push(current.left.val)
                queue.push(current.left)
            } else {
                result.push('null')
            }
            if (current.right !== null) {
                result.push(current.right.val)
                queue.push(current.right)
            } else {
                result.push('null')
            }
        }
    }
    console.log(result.toString())
    return result.toString()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
    if (data === '') {
        return null
    }
    const treeArray = data.split(',')
    const root = new TreeNode(Number(treeArray[0]))
    const queue = [root]
    let size
    let current
    let index = 1
    while (queue.length !== 0) {
        size = queue.length
        for (let i = 0; i < size; i++) {
            current = queue.shift()
            for (let j = index; j < index + 2 && j < treeArray.length; j++) {
                if (treeArray[j] === 'null') {
                    if (j % 2 === 1) {
                        current.left = null
                    } else {
                        current.right = null
                    }
                } else {
                    let next = new TreeNode(Number(treeArray[j]))
                    queue.push(next)
                    if (j % 2 === 1) {
                        current.left = next
                    } else {
                        current.right = next
                    }
                }
            }
            index += 2
        }
    }
    return root

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
