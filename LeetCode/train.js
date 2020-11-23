const flatten = function (head) {
    if(!head){
        return null
    }
    const stack = [head]
    let previous = null
    while (stack.length !== 0) {
        let current = stack.pop()
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

    return head
};