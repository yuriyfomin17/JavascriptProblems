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
// TIme complexity is O(H + k) where H is the tree height. This complexity is defined
    // by the stack, which contain at least H+k elements, since before starting to pop out one has to go down
    // to a leaf. This results in O(logN +k) for the balanced tree and O(N+k) for completely unbalanced
    // tree with all the nodes in the left subtree

// Space complexity is O(H) where H is the height of the binary tree since we need stack to store all nodes. That makes O(N)
    // in the worst case of the skewed tree and O(logN) in the average case of the balanced tree
const kthSmallest = function (root, k) {
    if (!root) {
        return -1
    }
    if(k===0){
        return root.val
    }
    const stack = []
    let current = root
    while (stack.length !== 0|| current!==null) {
        while (current){

            stack.push(current)

            current = current.left
        }
        let removed = stack.pop()

        current = removed.right
        k-=1
        if(k===0){
            return removed.val
        }
    }
    return -1
};