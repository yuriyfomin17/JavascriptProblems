function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : null)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Time Complexity is O(N) where N is the number of nodes
//Space complexity is O(H) where H is the height of the tree
// at most it can be equal to the number of nodes in graph
const rightSideView = function (root) {
    if(!root){
        return null
    }
    const queue = [root]
    const result = []
    while (queue.length !== 0) {
        let size = queue.length
        let currArr = []
        for (let i = 0; i < size; i++) {
            let currentNode = queue.shift()
            currArr.push(currentNode.val)
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        result.push(currArr[currArr.length-1])
    }
    return result
};