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
 * @param {number} k
 * @return {number}
 */
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