function TreeNode(val, left, right, next) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)

}


// Time Complexity is O(2N)=> O(N) since we are traversing the tree 2 times with Breadth First Search
// Space complexity is O(2*N) = > O(N) since we utilize array queue to store results and array result
// to store nodes
const connect = function (root) {
    if (!root) {
        return null
    }
    const queue = [root]
    const result = []
    while (queue.length !== 0) {
        let size = queue.length
        let currArr = []
        for (let i = 0; i < size; i++) {
            let currNode = queue.shift()
            if (currNode.left !== null) {
                currArr.push(currNode.left)
                queue.push(currNode.left)
            }
            if (currNode.right !== null) {
                currArr.push(currNode.right)
                queue.push(currNode.right)
            }
        }
        result.push(currArr)
    }

    for (let i = 0; i < result.length; i++) {
        for (let k = 1; k < result[i].length; k++) {
            let prevNode = result[i][k - 1]
            let nextNode = result[i][k]
            prevNode.next = nextNode

        }
    }
    return root
};
// Time Complexity is O(N)=> O(N) since we are traversing the tree 1 time with Breadth First Search
// Space complexity is O(N) = > O(N) since we utilize array queue to store results
// to store nodes
const connect = function (root) {
    const queue = [root]
    if (!root) {
        return null
    }
    while (queue.length !== 0) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let currentNode = queue.shift()
            if (i < size - 1) {
                currentNode.next = queue[0]
            }
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
    }
    return root
};
// Time complexity is O(N) in theory since we traverse each node only once
// Space complexity is O(1) since we are changing tree in place without using extra space
const connect = function (root) {
    if(!root){
        return null
    }
    let leftMost = root
    const helper = (list) => {
        let current = list
        let previous = null
        while (current) {
            if (previous) {
                previous.next = current.left
            }
            current.left.next = current.right
            previous = current.right
            current = current.next
        }
    }
    while (leftMost) {
        if(leftMost.left && leftMost.right){
            helper(leftMost)
        }

        leftMost = leftMost.left
    }
    return root
};