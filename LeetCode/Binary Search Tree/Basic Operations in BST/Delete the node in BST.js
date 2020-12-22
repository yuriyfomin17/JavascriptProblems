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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
    if (!root) {
        return null
    }
    let currNode = root
    let previous = null
    const successor = (node) => {
        let previous = node
        node = node.right
        while (node.left) {
            previous = node
            node = node.left
        }
        const value = node.val
        previous.right = null
        return value
    }
    while (currNode) {
        if (currNode.val < key) {
            previous = currNode
            currNode = currNode.right
        } else if (currNode.val > key) {
            previous = currNode
            currNode = currNode.left
        } else if (currNode.val === key) {
            if (currNode.left === null && currNode.right === null) {
                if(previous===null){
                    return null
                }
                if (previous.right === currNode) {
                    previous.right = null
                } else if (previous.left === currNode) {
                    previous.left = null
                }
            } else if (currNode.left !== null && currNode.right !== null) {
                const replacement = successor(currNode)
                currNode.val = replacement
                return root
            } else if (currNode.left === null && currNode.right !== null) {
                if (previous.right === currNode) {
                    previous.right = currNode.right
                } else if (previous.left === currNode) {
                    previous.left = currNode.right
                }
                return root
            } else if (currNode.left !== null && currNode.right === null) {
                if (previous.right === currNode) {
                    previous.right = currNode.left
                } else if (previous.left === currNode) {
                    previous.left = currNode.left
                }
                return root
            }
        }
    }
    return root
};