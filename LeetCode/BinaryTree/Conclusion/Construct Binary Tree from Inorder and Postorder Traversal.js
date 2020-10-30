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
    return helper(0, inorder.length - 1)
};
buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])