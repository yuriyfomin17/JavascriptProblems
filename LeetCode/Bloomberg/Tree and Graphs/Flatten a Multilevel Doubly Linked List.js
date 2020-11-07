class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
        this.child = null;
    }
}


/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = function (head) {
    if(!head){
        return null
    }
    const stack = [head]
    let previous = null
    const result = []
    while (stack.length !== 0) {
        let current = stack.pop()
        result.push(current)
        if (previous) {
            previous.next = current
            current.prev = previous
        }
        if (current.next) {
            stack.push(current.next)
        }
        if (current.child) {
            stack.push(current.child)
            current.child = null
        }
        previous = current

    }
    for(let i =1 ; i<result.length; i++){
        result[i-1].next = result[i]
        result[i].prev = result[i-1]

    }
    return head
};