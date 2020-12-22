/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderSuccessor = function (root, p) {
    if (!root || !p) {
        return null
    }
    const stack = []
    let currNode = root
    let previous = null
    while (stack.length || currNode) {
        while (currNode) {
            stack.push(currNode)
            currNode = currNode.left
        }
        let removed = stack.pop()

        if(previous===p.val){
            return removed
        }
        previous = removed.val
        currNode = removed.right
    }
    return null
};