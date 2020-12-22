// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

/**
 * initialize your data structure here.
 */
const MinStack = function () {
    this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (x !== undefined) {
        this[this.size] = x
        this.size += 1;
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.size !== 0) {
        this[this.size] = null;
        this.size -= 1


    }
}
;

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this[this.size - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let min = this[0]
    for (let i = 0; i < this.size; i++) {
        if (this[i] < min) {
            min = this[i]
        }
    }
    return min
};
const obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.top())
console.log(obj.getMin())