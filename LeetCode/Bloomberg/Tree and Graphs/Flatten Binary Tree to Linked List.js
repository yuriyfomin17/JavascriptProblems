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
            if (currentNode.right !== null) {
                stack.push(currentNode.right)
            }
            if (currentNode.left !== null) {
                stack.push(currentNode.left)
            }
            if (previous !== null) {
                previous.right = currentNode
                previous.left = null
                currentNode.left = null
            }
        }

        previous = currentNode
    }
};

// Time Complexity O(N) since we process each node of the tree at most twice.
// we actually process node when we run on them as current node . The second time
// when we process node is when wwe are trying to find the most right node. This algo
// is slower but we don't use any extra space
// Space Complexity is O(1)
const flatten = function (root) {
    if (root === null) {
        return null
    }

    let current = root
    while (current !== null) {

        // if the node has a left child
        if (current.left !== null) {

            // Find the rightmost node
            let rightMost = current.left
            while (rightMost.right !== null) {
                rightMost = rightMost.right
            }

            //rewire the connections
            rightMost.right = current.right
            current.right = current.left
            current.left = null
        }

        //move to the right side of the tree
        current = current.right
    }

};