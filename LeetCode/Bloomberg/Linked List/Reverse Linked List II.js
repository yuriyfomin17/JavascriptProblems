/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// Time complexity is O(N)(traversing linked list) + O(N) (reversing array)
// Space complexity is O(N) where N is the size of an array
const reverseBetween = function (head, m, n) {
    if (m === n) {
        return head
    }
    let count = 1
    let current = head
    const smallLinks = []
    let indexTail = true
    let indexHead = true
    let headLink = null
    let tailLink = null
    while (current) {
        if (indexHead && count < m) {
            headLink = current
        }
        if (count >= m && count <= n) {
            smallLinks.push(current)
            indexHead = false
        }
        if (count > n && indexTail) {
            tailLink = current
            indexTail = false
        }
        count += 1
        current = current.next
    }
    smallLinks.reverse()
    for (let i = 1; i < smallLinks.length; i++) {
        smallLinks[i - 1].next = null
        smallLinks[i].next = null
        smallLinks[i - 1].next = smallLinks[i]
    }
    if (headLink && tailLink) {
        headLink.next = smallLinks[0]
        smallLinks[smallLinks.length - 1].next = tailLink

    }
    if (headLink && !tailLink) {
        headLink.next = smallLinks[0]
    }
    if (!headLink && tailLink) {
        smallLinks[smallLinks.length - 1].next = tailLink
        head = smallLinks[0]
    }
    if (!headLink && !tailLink) {
        head = smallLinks[0]
    }
    return head

};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// Space complexity is O(N)
// Time complexity is O(1)
const reverseBetween = function (head, m, n) {
    let previous = null
    let current = head
    while (m > 1) {
        previous = current
        current = current.next
        m = m - 1
        n = n - 1
    }
    let tail = current
    let start = previous
    let next = current.next
    while (n) {
        next = current.next
        current.next = previous
        previous = current
        current = next
        n -= 1
    }
    if(start){
        start.next = previous
    }else{
        head = previous
    }
    tail.next = current
    return head
};