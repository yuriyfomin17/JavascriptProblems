//  Given a binary tree, return the preorder traversal of its nodes' values.
// Input: [1,null,2,3]
//    1
//     \
//      2
//      /
//     3
//
// Output: [1,2,3]


class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }

}

class BinaryTree {
    constructor() {
        this.root = null
    }
}


function insertLevelOrder(arr, root, i, n) {
    if (arr[i] === null || i === n) {
        ++i
        return null
    }


    let temp = new Node(arr[i])
    ++i
    root = temp
    root.left = insertLevelOrder(arr, root, i, n)
    root.right = insertLevelOrder(arr, root, i, n)


    return root
}


function createTree(arr) {
    let tree = new BinaryTree()
    let root = null
    let n = arr.length
    tree = insertLevelOrder(arr, root, 0, n)
    return tree
}

debugger
const tree = createTree([5, 4, 7, 3, null, 2, null, -1, null, 9])
console.log(tree)

function preorderTraversal(tree) {
    const arrNew = []

    function traversal(root, indexLeft, indexRight, acc = []) {
        if (!!root) {
            acc.push(root.data)
            if (root[indexLeft] !== null) {
                traversal(root.left, acc)
            }
            if (root[indexRight] !== null) {
                traversal(root.right, acc)

            }

        }
        return acc

    }

    arrNew.concat(traversal(tree[0], 1, 2, arrNew))
    return arrNew

}

console.log(preorderTraversal([1, null, 2, 3]))