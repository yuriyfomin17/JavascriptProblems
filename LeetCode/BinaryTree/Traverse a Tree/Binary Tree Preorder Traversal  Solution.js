function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// since we visit each node exactly once so Time complexity is O(n)
// Space Complexity: is O(N)   where N is the size of the stack
const preorderTraversal = function (root) {
    if (!root) {
        return []
    }
    const result = []
    const stack = [root]
    let current = root
    while (stack.length !== 0) {
        while (current !== null) {
            result.push(current.val)
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        current = current.right
    }
    return result
};