


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
 */
//Time Complexity is O(1) for next() and hasNext() since we can check and carry out rest of work
// in the background
// Space Complexity is O(H) where H is the height of the tree
const BSTIterator = function (root) {
    this.stack = []
    let currNode = root
    while (currNode) {
        this.stack.push(currNode)
        currNode = currNode.left
    }

};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    let removed = this.stack.pop()
    const result = removed.val
    let currNode = null
    if(removed.right){
        currNode = removed.right
        while (currNode){
            this.stack.push(currNode)
            currNode = currNode.left
        }
    }
    return result


};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length>0
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */