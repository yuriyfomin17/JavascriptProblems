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
// TIme Complexity is O(N) since we visit each node eaxcatly once
    // Space Complexity is O(N) since we keep N nodes in stack
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
// Recursive
var flatten = function(head) {
    let last = null;
    const dfs = node => {
        if(!node) return;
        dfs(node.next);
        dfs(node.child);
        node.next = last;
        if(last) last.prev = node;
        node.child = null;
        last = node;
    };
    dfs(head);
    return head;
};