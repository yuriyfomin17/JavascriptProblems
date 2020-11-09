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

    while (current3) {
        let next = current3.next
        current3.next = previous
        previous = current3
        current3 = next
    }
    head3 = previous
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
    if(carry>0){
        previous.next = new ListNode(carry)
    }
    current3 = head3

    previous = null

    while (current3) {
        let next = current3.next
        current3.next = previous
        previous = current3
        current3 = next
    }
    head3 = previous
    return head3

};