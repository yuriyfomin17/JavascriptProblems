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
 * @return {boolean}
 */
// Time Complexity is O(n log(n))
    // Space Complexity is O(N) where n is the number of nodes
const height = (root) => {
        if (root === null) {
            return -1
        }
        return 1 + Math.max(height(root.left), height(root.right))
    }
const isBalanced = function (root) {
    if (root === null) {
        return true
    }
    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
};

var isBalanced = function (root) {
    let balanced = true;

    function findHeight(root) {
        if (!root) return 0;
        if (balanced === false) return; // optimisation: early exit

        let leftHeight = findHeight(root.left);
        let rightHeight = findHeight(root.right);
        let diff = Math.abs(leftHeight - rightHeight);

        if (diff > 1) balanced = false;

        return Math.max(leftHeight, rightHeight) + 1;
    }

    findHeight(root);
    return balanced;
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(H), call stack will possibly go as deep as height
};

var isBalanced = function(root) {
    if(!root) return true
    let depth = new Map
    let s = []
    let last

    while(root || s.length) {
        if(root) {
            s.push(root)
            root = root.left
        }else {
            root = s[s.length-1]
            if(!root.right || last == root.right) {
                last = s.pop()

                let left = depth.get(last.left)||0
                let right = depth.get(last.right)||0
                if(Math.abs(left-right)>1) return false
                depth.set(last, 1 + Math.max(left, right))

                root = null
            }else {
                root = root.right
            }
        }
    }
    return true
};
