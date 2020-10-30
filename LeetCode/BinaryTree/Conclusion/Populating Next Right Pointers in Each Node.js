function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};


/**
 * @param {Node} root
 * @return {Node}
 */
// Time complexity is O(N) where N is the number of nodes since we traverse all nodes
// at most 1 time

// Space complexity is O(N) where N is the size of the queue
const connect = function (root) {
    if (!root) {
        return null
    }
    const queue = [root]
    let current
    let size;

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

// Time complexity is O(N) since we are traversing each node exactly once
// Space complexity is O(1) since we are not using the queue
const connect2 = function (root) {
    if (!root) {
        return null
    }
    let leftmost = root
    let head
    while (leftmost.left) {
        head = leftmost
        while (head) {
            head.left.next = head.right
            if (head.next !== null) {
                head.right.next = head.next.left
            }
            head = head.next
        }
        leftmost = leftmost.left
    }
    return root
};