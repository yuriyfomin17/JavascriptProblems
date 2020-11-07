function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Time complexity is OMax(L1, L2) since we gonna iterate through biggest list
// Space complexity is OMax(L1, L2) since we gonna use space for biggest linked list
const addTwoNumbers = function (l1, l2) {
    let current1 = l1
    let current2 = l2
    let head = null
    let carryVal = 0
    let current = head
    while (current1 !== null || current2 !== null) {
        let val1 = current1 !== null ? current1.val : 0
        let val2 = current2 !== null ? current2.val : 0
        let currVal = val1 + val2 + carryVal

        if (currVal >= 10) {
            currVal = currVal - 10
            carryVal = 1
        } else {
            carryVal = 0
        }
        let node = new ListNode(currVal)
        if (head === null) {
            head = node
            current = head
        } else {
            current.next = node
            current = current.next
        }
        current1 = current1 !== null ? current1.next : null
        current2 = current2 !== null ? current2.next : null

    }
    if (carryVal > 0) {
        current.next = new ListNode(carryVal, null)
    }
    return head
};

addTwoNumbers([2, 4, 3], [5, 6, 4])