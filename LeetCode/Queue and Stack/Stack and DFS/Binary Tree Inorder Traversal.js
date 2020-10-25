function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param map
 * @return {number[]}
 */

//Space complexity O(n)
//Time complexity O(n)
const inorderTraversal = function (root) {
    const result = []
    if (!root) return []
    const stack = []
    let current = root;
    while (stack.length !== 0 || current !== null) {
        while (current !== null) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        result.push(current.val)
        current = current.right
    }

    return result
};

//Recursive

const inorderTraversalRecursive = function (root) {
    const result = []
    if (!root) return []
    const helper = (currNode, result) => {
        if (currNode !== null) {
            if (currNode.left !== null) {
                helper(currNode.left, result)
            }
            result.push(currNode.val)
            if (currNode.right !== null) {
                helper(currNode.right, result)
            }
        }
    }
    helper(root, result)


    return result
};