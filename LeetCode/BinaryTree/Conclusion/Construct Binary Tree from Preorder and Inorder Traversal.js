function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
    const dict = {}
    inorder.map((element, index) => {
        dict[element] = index
    })
    const helper = (left, right) => {
        if (left !== right) {
            let currVal = preorder.shift()
            let root = new TreeNode(currVal)
            let index = dict[currVal]
            root.left = helper(left, index)
            root.right = helper(index + 1, right)
            return root
        } else {
            return null
        }

    }
    return helper(0, inorder.length )
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])