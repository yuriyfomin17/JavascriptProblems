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