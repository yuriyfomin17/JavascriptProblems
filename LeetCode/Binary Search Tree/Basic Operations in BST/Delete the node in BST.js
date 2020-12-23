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
 * @param {number} key
 * @return {TreeNode}
 */
//RECURSIVE SOLUTION
// Time complexity is O(logN). During execution we go down the tree all the time.
    // First search the node to delete and then actually delete it. Search takes H1 from
    // root to the node to delete. And H2is the tree heaigh from the root to delete to the leaf
    // O(H1 + H2) = O(H). H is the tree height which is equal to the logN where N is the number of nodes in
    // balanced tree.

    // Space Complexity is O(H) to keep the recursion stack where H = log N for the balanced tree
const deleteNode = function (root, key) {
        if (!root) {
            return null
        }
        const successor = (node) => {
            // One Step right and then always left
            node = node.right
            while (node.left) {
                node = node.left
            }
            return node.val
        }
        const predecessor = (node) => {
            // One step left and then always right
            node = node.left
            while (node.right) {
                node = node.right
            }
            return node.val
        }
        // delete from the right subtree
        if (key > root.val) {
            root.right = deleteNode(root.right, key)
            // delete from the left subtree
        } else if (key < root.val) {
            root.left = deleteNode(root.left, key)
            // delete current node
        } else {
            // node is leaf
            if (!root.left && !root.right) {
                root = null
                // node is not leaf and has right child
            } else if (root.right) {
                root.val = successor(root)
                root.right = deleteNode(root.right, root.val)
            } else {
                // node is not leaf and has left child
                root.val = predecessor(root)
                root.left = deleteNode(root.left, root.val)
            }
        }
        return root
    };




// ITERATIVE SOLUTION
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
 * @param {number} key
 * @return {TreeNode}
 */
// Time Complexity in best case is Olog(N) where N is the number of nodes in best case but O(N) in worst case
// Space Complexity is O(1) since we don't use any extra memeory to keep tree
const deleteNode = function (root, key) {
    if (!root) {
        return null
    }
    const successor = (node) => {
        node = node.right
        while (node.left) {
            node = node.left
        }
        return node.val
    }
    const predecessor = (node) => {
        node = node.left
        while (node.right) {
            node = node.right
        }
        return node.val
    }

    let currNode = root
    let previous = null
    while (currNode) {
        if (currNode.val > key) {
            previous = currNode
            currNode = currNode.left
        } else if (currNode.val < key) {
            previous = currNode
            currNode = currNode.right
        } else if (currNode.val === key) {
            if(previous===null && currNode.left === null && currNode.right === null){
                return null
            }
            if (previous!==null && currNode.left === null && currNode.right === null) {
                previous.left === currNode ? previous.left = null : previous.right = null
                return root
            }
            if(currNode.right){
                currNode.val = successor(currNode)
                previous = currNode
                key = currNode.val
                currNode = currNode.right
            }else {
                currNode.val = predecessor(currNode)
                previous = currNode
                key = currNode.val
                currNode = currNode.left
            }
        }
    }
    return root
};