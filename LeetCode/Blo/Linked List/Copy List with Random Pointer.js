function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
    if (!head) {
        return null
    }
    const dict = new Map()
    const newHead = new Node(head.val)
    dict.set(head, newHead)
    let currentOld = head

    while (currentOld) {
        if (currentOld.next) {
            if (!dict.has(currentOld.next)) {
                dict.set(currentOld.next, new Node(currentOld.next.val))
            }
            dict.get(currentOld).next = dict.get(currentOld.next)
        }
        if (currentOld.random) {
            if (!dict.has(currentOld.random)) {
                dict.set(currentOld.random, new Node(currentOld.random.val))
            }
            dict.get(currentOld).random = dict.get(currentOld.random)
        }
        currentOld = currentOld.next
    }
    return newHead
};


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// Space complexity is O(N)
// time complexity is O(1)
const copyRandomList = function (head) {
    if (head == null) {
        return null;
    }
    let temp = head;
    // first set the next pointers
    while (temp !== null) {
        let newNode = new Node(temp.val);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = newNode.next;
    }
    // set the random pointers now
    temp = head;
    while (temp !== null) {
        temp.next.random = temp.random ? temp.random.next : null;
        temp = temp.next.next;
    }
    // unweave the list now
    let oldList = head;
    let newList = head.next;
    let dummy = newList;
    while (oldList !== null) {
        oldList.next = oldList.next.next;
        newList.next = newList.next ? newList.next.next : null;
        oldList = oldList.next;
        newList = newList.next;
    }
    return dummy;
};