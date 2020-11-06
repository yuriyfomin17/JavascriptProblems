function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// TIme complexity is O(N) where N is the number of nodes in a Binary tree
// Space complexity is O(H) where H is the height of the binary tree since we need stack to store all nodes
const kthSmallest = function (root, k) {
    const stack = []
    let currNode = root
    const result = []
    if (k===0){
        return root.val
    }
    while (stack.length !== 0 || currNode !== null) {
        while (currNode !== null) {
            stack.push(currNode)
            result.push(currNode.val)
            currNode = currNode.left
        }

        k -= 1
        let removed = stack.pop()
        if (k===0){
            return removed.val
        }
        currNode = removed.right
    }

};