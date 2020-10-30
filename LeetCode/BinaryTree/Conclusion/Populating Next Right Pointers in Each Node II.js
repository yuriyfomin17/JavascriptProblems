/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
    if (!root) {
        return null
    }
    const queue = [root]
    let current
    let size
    while (queue.length !== 0) {
        size = queue.length
        for (let i = 0; i < size; i++) {
            current = queue.shift()
            if (i < size - 1) {
                current.next = queue[0]
            }
            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
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