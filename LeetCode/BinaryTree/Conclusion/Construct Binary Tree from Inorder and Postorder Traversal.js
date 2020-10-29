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
const buildTree = function (inorder, postorder) {
    const dict = {}
    inorder.map((el, index) => {
        dict[el] = index
    })
    const helper = (left, right) => {
        if (right > left) {
            let value = postorder.pop()
            let root = new TreeNode(value)

            let index = dict[value]

            root.right = helper(index + 1, right)
            root.left = helper(left, index - 1)

            return root
        }else {
            return null
        }
    }
    return helper(0, inorder.length-1)
};