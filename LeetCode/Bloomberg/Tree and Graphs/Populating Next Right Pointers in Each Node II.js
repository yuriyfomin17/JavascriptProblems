function TreeNode(val, left, right, next) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)

}

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
const processChild = (childNode, prev, leftmost) => {
    if (childNode) {
        if (prev!==null) {
            prev.next = childNode
        } else {
            leftmost = childNode
        }
        prev = childNode
    }
    return [prev, leftmost]
}
const connect2 = function (root) {
    if (!root) {
        return null
    }
    let leftmost = root
    let previous = null
    let curr
    let result

    while (leftmost) {
        previous = null
        curr = leftmost
        leftmost = null
        while (curr) {
            result = processChild(curr.left, previous, leftmost)
            result = processChild(curr.right, result[0], result[1])
            previous = result[0]
            leftmost = result[1]
            curr = curr.next
        }

    }
    return root
};