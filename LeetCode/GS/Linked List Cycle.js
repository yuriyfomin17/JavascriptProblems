/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Time Complexity is O(N)
    // Space complexity is O(1)
const hasCycle = function (head) {
    if (!head) {
        return false
    }
    let slow = head
    let fast = head.next
    while (slow!==fast){
        if(fast===null|| fast.next===null){
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    return true
};