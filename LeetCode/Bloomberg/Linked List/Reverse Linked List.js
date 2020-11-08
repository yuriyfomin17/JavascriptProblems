/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time Complexity O(2N) to iterate 2 times
// Space complexity is O(N) where N is teh size of an array
const reverseList = function (head) {
    if(!head){
        return null
    }
    let next = head.next
    let previous = null
    head.next = null
    const result = [head]
    while (next) {
        if (previous) {
            result.push(previous)
        }
        previous = next
        next = next.next
    }
    if(previous){

        result.push(previous)
    }
    result.reverse()
    if(result.length>1){
        for (let i = 0; i < result.length-1; i++) {
            result[i].next = result[i+1]
        }
    }

    return result[0]
};