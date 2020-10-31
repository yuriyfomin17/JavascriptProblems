function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// Time complexity is O(N)
// Space complexity is O(N) since we store the entire tree
const buildTree = function (inorder, postorder) {
    const dict = {}
    inorder.map((el, index) => {
        dict[el] = index
    })
    const helper = (left, right) => {
        if (left <= right) {
            let value = postorder.pop()
            let root = new TreeNode(value)

            let index = dict[value]

            root.right = helper(index + 1, right)
            root.left = helper(left, index - 1)

            return root
        } else {
            return null
        }
    }
    return helper(0, postorder.length - 1)
}
const buildTreeIteration = function (inorder, postorder) {
    const dict = new Map()
    inorder.map((el, index) => {
        dict.set(el, index)
    })
    let root = null
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
                let u
                while (stack.length !== 0 && dict.get(postorder[i]) < dict.get(stack[stack.length - 1].val)) {
                    u = stack.pop()
                }
                u.left = node
            }
            stack.push(node)
        }

    }
    return root
}