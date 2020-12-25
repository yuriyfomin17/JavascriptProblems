/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// TIme complexity is O max(l1, l2) + log(l1+l2) + Omax(l1, l2)
// Space complexity is O(l1 + l2) since we store them both in array
const mergeTwoLists = function (l1, l2) {
    const result = []
    let current1 = l1
    let current2 = l2
    while (current1 !== null || current2 !== null) {
        if (current1 !== null) {
            result.push(current1)
            current1 = current1.next
        }
        if (current2 !== null) {
            result.push(current2)
            current2 = current2.next
        }

    }
    result.sort(function (a, b) {
        if (a.val > b.val) {
            return 1
        } else {
            return -1
        }

    })
    let head = null
    let current = null
    for (let i = 0; i < result.length; i++) {
        if (head === null) {
            head = result[i]
            current = head
            current.next = null
        } else {
            current.next = result[i]
            current = current.next
            current.next = null
        }
    }
    return head
};
// Time Complexity is O max(l1, l2)
// Space complexity os O(1)
var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode();
    let cur = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1) cur.next = l1;
    else if (l2) cur.next = l2;
    return dummy.next;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};