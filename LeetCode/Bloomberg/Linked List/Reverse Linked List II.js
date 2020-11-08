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
const reverseBetween = function (head, m, n) {
    if(m===n ){
        return head
    }
    let current = head
    let count = 1
    let link1 = null
    let link2 = null
    let result = []
    let index1 = false
    while (current !== null) {
        if (count === n+1) {
            link2 = current
            index1 = false
        }
        if (index1) {
            result.push(current)
        }
        if (count === m-1) {
            link1 = current
            index1 = true
        }

        current = current.next
        count += 1
    }
    result = result.reverse()
    for(let i =1; i<result.length; i++){
        result[i-1].next = null
        result[i].next = null
        result[i-1].next = result[i]
    }
    if(result.length!==0){
        link1.next = result[0]
        result[result.length-1].next = link2
        link2.next = null
    }else{
        let last = head.next
        head.next = null
        last.next = head
        head = last
    }

    return head
};