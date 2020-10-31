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
// Time Complexity is O(N) where N is the number of nodes
// Space Complexity is O(N) since we store the entire tree
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
    return helper(0, inorder.length)
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])

//Iterative Solution

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
const buildTree = function (preorder, inorder) {
    const dict = new Map()
    inorder.map((element, index) => {
        dict.set(element, index)
    })

    let root = null
    const stack = []
    let current
    for (let i = 0; i < preorder.length; i++) {
        if (root === null) {
            root = new TreeNode(preorder[i])
            stack.push(root)
        } else {
            let node = new TreeNode(preorder[i])
            if (dict.get(preorder[i]) < dict.get(stack[stack.length-1].val)) {
                stack[stack.length - 1].left = node
            } else {
                let u = stack[stack.length-1]
                while (stack.length!==0 &&dict.get(preorder[i]) > dict.get(u.val)) {
                    u = stack.pop()
                }
                u.right = node
            }
            stack.push(node)

        }
    }
    return root
};
