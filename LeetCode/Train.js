/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
    let root = null
    const dict = new Map()
    inorder.map((el, index) => {
        dict.set(el, index)
    })
    const stack = []
    for (let i = postorder.length - 1; i >= 0; i--) {
        if (root === null) {
            root = new TreeNode(postorder[i])
            stack.push(root)
        } else {
            let node = new TreeNode(postorder[i])
            if (dict.get(postorder[i]) > dict.get(stack[stack.length - 1].val)) {
                stack[stack.length - 1].right = node
            } else {
                let removed = null
                while (stack.length !== 0 && dict.get(postorder[i]) < dict.get(stack[stack.length - 1].val)) {
                    removed = stack.pop()
                }
                removed.left = node
            }
            stack.push(node)
        }

    }
    return root

};