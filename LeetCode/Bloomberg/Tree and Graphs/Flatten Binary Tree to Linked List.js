function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//Time complexity is O(N) where N is the number of nodes we at most visit each node once
// Space complexity is O(N) where N is the space taken by stack at most it is equal to the height of tree
const flatten = function (root) {
    const stack = [root]
    let previous = null
    while (stack.length !== 0) {
        let currentNode = stack.pop()
        if (currentNode) {
            if(currentNode.right!==null){
                stack.push(currentNode.right)
            }
            if(currentNode.left!==null){
                stack.push(currentNode.left)
            }
            if (previous !== null) {
                previous.right = currentNode
                previous.left = null
                currentNode.left =null
            }
        }

        previous = currentNode
    }
};