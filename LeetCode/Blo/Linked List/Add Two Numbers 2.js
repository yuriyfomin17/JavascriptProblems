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
    const findLength = (list) => {
        let count = 0
        let current = list
        while (current) {
            count += 1
            current = current.next
        }
        return count
    }
    const reverse = (list) => {
        let current = list
        let previous = null
        while (current) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }
        return previous
    }

    let length1 = findLength(l1)
    let length2 = findLength(l2)

    let current1 = l1
    let current2 = l2
    let current3 = null
    let head3 = null

    while (current1 || current2) {
        let val1 = current1 === null ? 0 : current1.val
        let val2 = current2 === null ? 0 : current2.val


        if (length1 === length2) {
            if (head3 === null) {
                head3 = new ListNode(val1 + val2, null)
                current3 = head3
            } else {
                current3.next = new ListNode(val1 + val2, null)
                current3 = current3.next
            }

            current1 = current1.next
            current2 = current2.next

        } else {
            if (head3 === null) {
                head3 = new ListNode(0, null)
                current3 = head3
            } else {
                current3.next = new ListNode(0, null)
                current3 = current3.next
            }
            if (length1 > length2) {
                current3.val = current1.val
                current1 = current1.next
                length1 -= 1
            } else {
                current3.val = current2.val
                current2 = current2.next
                length2 -= 1
            }
        }

    }

    head3 = reverse(head3)

    current3 = head3
    let carry = 0
    let previous3 = null
    while (current3) {
        let val3 = current3.val + carry
        if (val3 >= 10) {
            current3.val = val3 - 10
            carry = 1
        } else {
            current3.val = val3
            carry = 0
        }
        previous3 = current3
        current3 = current3.next
    }
    if (carry > 0) {
        previous3.next = new ListNode(carry, null)
    }

    head3 = reverse(head3)
    return head3

};

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
// Time complexity is O(N1 + N2) where N1 and N2 are number of elements in boths lists
// Space complexity is O(1) without taking the output list to store the results
const addTwoNumbers = function (l1, l2) {
    let length1 = 0
    let length2 = 0
    let current1 = l1
    let current2 = l2
    while (current1) {
        length1 += 1
        current1 = current1.next
    }

    while (current2) {
        length2 += 1
        current2 = current2.next
    }


    let head3 = null
    let current3 = null
    current1 = l1
    current2 = l2
    const size1 = length1
    const size2 = length2

    while (current1 || current2) {
        if (length1 === length2) {
            let val1 = current1 === null ? 0 : current1.val
            let val2 = current2 === null ? 0 : current2.val
            let val3 = val1 + val2
            if (!head3) {
                head3 = new ListNode(val3)
                current3 = head3
            } else {
                let node = new ListNode(val3)
                current3.next = node
                current3 = current3.next
            }
            if (current1) {
                current1 = current1.next
            }
            if (current2) {
                current2 = current2.next
            }
            length1 -= 1
            length2 -= 1
        } else {
            if (length1 > length2) {
                let val1 = current1 === null ? 0 : current1.val
                if (!head3) {
                    head3 = new ListNode(val1)
                    current3 = head3
                } else {
                    let node = new ListNode(val1)
                    current3.next = node
                    current3 = current3.next
                }
                if (current1) {
                    current1 = current1.next
                }
                length1 -= 1
            } else if (length2 > length1) {
                let val2 = current2 === null ? 0 : current2.val
                if (!head3) {
                    head3 = new ListNode(val2)
                    current3 = head3
                } else {
                    let node = new ListNode(val2)
                    current3.next = node
                    current3 = current3.next
                }
                if (current2) {
                    current2 = current2.next
                    length2 -= 1
                }
            }
        }
    }
    current3 = head3
    let carry = 0
    let previous = null
    const reverse = (list) => {
        let current = list
        let previous = null
        while (current) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }
        return previous
    }

    head3 = reverse(current3)
    current3 = head3
    while (current3) {
        let val3 = current3.val + carry
        if (val3 >= 10) {
            carry = 1
            current3.val = val3 - 10
        } else {
            carry = 0
            current3.val = val3
        }
        previous = current3
        current3 = current3.next

    }
    if (carry > 0) {
        previous.next = new ListNode(carry)
    }
    current3 = head3


    head3 = reverse(current3)
    return head3

};