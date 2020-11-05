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
// Time complexity is O(N) since we cross each node only once at a time
// SPace complexity is O(K) since we store values of nodes in array
const isValidBST = function (root) {
    if (!root) {
        return true
    }
    const stack = []
    let current = root
    const result = []
    while (current !== null || stack.length !== 0) {
        while (current !== null) {
            stack.push(current)
            current = current.left
        }
        let removed = stack.pop()
        if(result.length!==0){
            if(result[result.length-1]>=removed.val){
                return false
            }else{
                result.push(removed.val)
            }
        }else{
            result.push(removed.val)
        }
        current = removed.right
    }
    return true
};