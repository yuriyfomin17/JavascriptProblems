function TreeNode(val, left, right, next) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)

}

// Time Complexity is O(N) since we process each node exactly once. Note that processing a node
// in this context means popping the node from the queue and then establishing the next pointer

// Space Complexity is O(N) since we have a stack where we contain our nodes
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


// Time Complexity is O(N) since we process each node exactly once
// Space Complexity is O(1) since we don't utilize any extra space
const connect = function (root) {
    if (!root) {
        return null
    }
    let leftmost = root

    const helper = (child, previous, leftmost) => {
        if (child) {
            if (previous) {
                previous.next = child
            } else {
                leftmost = child
            }
            previous = child

        }
        return [previous, leftmost]
    }
    while (leftmost) {
        let previous = null
        let current = leftmost
        leftmost = null
        while (current) {
            let result = helper(current.left, previous, leftmost)
            result = helper(current.right, result[0], result[1])

            previous = result[0]
            leftmost = result[1]

            current = current.next
        }
    }
    return root
};