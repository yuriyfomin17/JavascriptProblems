// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
//
//     One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
//
// Your implementation should support following operations:
//
//     MyCircularQueue(k): Constructor, set the size of the queue to be k.
//     Front: Get the front item from the queue. If the queue is empty, return -1.
// Rear: Get the last item from the queue. If the queue is empty, return -1.
// enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
// deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
// isEmpty(): Checks whether the circular queue is empty or not.
// isFull(): Checks whether the circular queue is full or not.

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
const MyCircularQueue = function (k) {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
    this.maxSize = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false
    }
    if (this.isEmpty()) {
        this.tail = 0
        this.head = 0
    } else {
        this.tail += 1
    }
    this.size += 1
    this[this.tail] = value
    return true

};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false
    }
    this[this.head] = null
    this.size -= 1
    if(!this.size){
        this.head = null
        this.tail = this.head
    }else{
        if (this.head === this.maxSize) {
            this.head = 0;
        } else {
            this.head += 1;
        }

    }
    return true

};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {

    return isNaN(this[this.head])? -1: this[this.head]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return isNaN(this[this.tail])? -1: this[this.tail]

};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return !this.size;

};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size===this.maxSize
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
debugger
const obj = new MyCircularQueue(3)
const param_1 = obj.enQueue(1)
const param_2 = obj.deQueue()
const param_3 = obj.Front()
const param_4 = obj.Rear()
const param_5 = obj.isEmpty()
const param_6 = obj.isFull()
