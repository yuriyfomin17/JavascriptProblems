/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// Time Complexity is O(N) where N is the number of nodes
// Space Complexity is O(N) since we store the entire tree
const buildTree = function (preorder, inorder) {
    const dict = new Map()
    inorder.map((el, index) => {
        dict.set(el, index)
    })
    let root = null
    const stack = []
    for (let i = 0; i < preorder.length; i++) {
        if (root === null) {
            root = new TreeNode(preorder[i])
            stack.push(root)
        } else {
            let node = new TreeNode(preorder[i])
            if (dict.get(preorder[i]) < dict.get(stack[stack.length - 1].val)) {
                stack[stack.length - 1].left = node
            } else {
                let removed = null
                while (stack.length !== 0 && dict.get(preorder[i]) > dict.get(stack[stack.length - 1].val)) {
                    removed = stack.pop()
                }
                removed.right = node
            }
            stack.push(node)
        }
    }
    return  root

};