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
// Time Complexity in best case is Olog(N) where N is the number of nodes in best case but O(N) in worst case
// Space Complexity is O(1) since we don't use any extra memeory to keep tree
const deleteNode = function (root, key) {
    if (!root) {
        return null
    }
    const successor = (node) => {
        node = node.right
        while (node.left) {
            node = node.left
        }
        return node.val
    }
    const predecessor = (node) => {
        node = node.left
        while (node.right) {
            node = node.right
        }
        return node.val
    }

    let currNode = root
    let previous = null
    while (currNode) {
        if (currNode.val > key) {
            previous = currNode
            currNode = currNode.left
        } else if (currNode.val < key) {
            previous = currNode
            currNode = currNode.right
        } else if (currNode.val === key) {
            if(previous===null && currNode.left === null && currNode.right === null){
                return null
            }
            if (previous!==null && currNode.left === null && currNode.right === null) {
                previous.left === currNode ? previous.left = null : previous.right = null
                return root
            }
            if(currNode.right){
                currNode.val = successor(currNode)
                previous = currNode
                key = currNode.val
                currNode = currNode.right
            }else {
                currNode.val = predecessor(currNode)
                previous = currNode
                key = currNode.val
                currNode = currNode.left
            }
        }
    }
    return root
};