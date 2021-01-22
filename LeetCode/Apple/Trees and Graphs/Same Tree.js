/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// Time Complexity is O(N) since each noe is visited exactly once
    // Space Complexity O(logN) in the best case the tree is completely balanced
    // and O(N) in the case the tree is unbalanced
const isSameTree = function (p, q) {
    if(!p&&!q){
        return true
    }
    if ((p && !q) || (!p && q)) {
        return false
    }
    const queueQ = [p]
    const queueP = [q]
    while (queueQ.length !== 0 && queueP.length !== 0) {
        let elementP = queueQ.shift()
        let elementQ = queueP.shift()
        if (elementP.val !== elementQ.val) {
            return false
        } else if (elementP.left && !elementQ.left) {
            return false
        } else if (!elementP.left && elementQ.left) {
            return false
        } else if (elementP.left && elementQ.left) {
            queueQ.push(elementQ.left)
            queueP.push(elementP.left)
        }
        if (elementP.right && !elementQ.right) {
            return false
        } else if (!elementP.right && elementQ.right) {
            return false
        } else if (elementP.right && elementQ.right) {
            queueQ.push(elementQ.right)
            queueP.push(elementP.right)
        }
    }
    return true
};