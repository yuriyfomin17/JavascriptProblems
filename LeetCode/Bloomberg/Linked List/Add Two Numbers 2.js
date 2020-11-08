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
//Time Complexity is O(N1) + O(N2) + O(Max(N1,N2)) + O(N3) which is O(N)
// Space complexity is O(N) where N is the number of links in final answer
const addTwoNumbers = function (l1, l2) {
    let head1
    let previous = null
    let current = l1
    while (current) {
        let next = current.next
        current.next = previous
        previous = current
        current = next
    }
    head1 = previous


    let head2
    current = l2
    previous = null
    while (current) {
        let next = current.next
        current.next = previous
        previous = current
        current = next
    }
    head2 = previous

    let current1 = head1
    let current2 = head2
    let head3 = null
    let current3 = null
    let carry = 0
    while (current1 || current2 || carry !== 0) {
        let val1 = current1 === null ? 0 : current1.val
        let val2 = current2 === null ? 0 : current2.val
        let val = val1 + val2 + carry
        if (val >= 10) {
            val = val - 10
            carry = 1
        } else {
            carry = 0
        }
        let node = new ListNode(val)
        if (head3 === null) {
            head3 = node
            current3 = head3
        } else {
            current3.next = node
            current3 = current3.next
        }
        current2 = current2 === null ? null : current2.next
        current1 = current1 === null ? null : current1.next

    }
    current3 = head3
    previous = null
    while (current3) {
        let next = current3.next
        current3.next = previous
        previous = current3
        current3 = next
    }

    return previous
};