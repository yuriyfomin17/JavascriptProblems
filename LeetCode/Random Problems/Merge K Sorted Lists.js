/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    let newHead = new ListNode();
    let cur = newHead;
    while (true) {
        let minIdx = null;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] && (minIdx == null || lists[i].val < lists[minIdx].val)) {
                minIdx = i;
            }
        }
        if (minIdx == null) break; // there is no more node to traverse
        cur.next = lists[minIdx];
        cur = cur.next;
        lists[minIdx] = lists[minIdx].next;
    }
    return newHead.next;
    // Time Complexity: O(k * N), N = the number of all nodes | every selection of one node costs O(k)
    // Space Complexity: O(1)
};

/*
1. Create a new head node.
2. Scan through the heads of every list and find the head with the smallest value.
3. Append this node to our list. We advance pointer of our list by one.
We advance the head with the smallest value by one as well.
4. Repeat 1,2,3 until there is no more node to traverse.
*/


// Time Complexity is O(Nlog(N)) where N is the total number of nodes
// Collecting takes O(N) + sorting O(Nlog(N)) + iterating O(N)

// Space Complexity is O(N)
const mergeKLists = function (lists) {
    const nodes = []

    for (let i = 0; i < lists.length; i++) {
        let currentHead = lists[i]
        while (currentHead) {
            nodes.push(currentHead)
            currentHead = currentHead.next
        }
    }
    nodes.sort(function (a, b) {
        if (a.val >= b.val) {
            return 1
        } else {
            return -1
        }
    })
    let head = null
    let current = null
    for (let i = 0; i < nodes.length; i++) {
        if(head===null){
            head=nodes[i]
            current = head
        }else {
            current.next = nodes[i]
            current = current.next
        }
    }
    return head

};