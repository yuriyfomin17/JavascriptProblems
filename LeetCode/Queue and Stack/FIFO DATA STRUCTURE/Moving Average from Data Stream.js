// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3

//Approach 1: Array of List
// Intuition
//
// Following the description of the problem, we could simply keep track of all the incoming values
// with the data structure of Array or List.
// Then from the data structure, later we retrieve the necessary
// elements to calculate the average.


const MovingAverage = function (k) {
    this.size = k;
    this.queue = []
};

MovingAverage.prototype.next = function (val) {
    this.queue.push(val)
    let startIndex = this.queue.length - this.size
    let sum = this.queue.reduce(function (acc, val, index) {
        return index >= startIndex ? acc + val : 0
    }, 0)
    return sum / Math.min(this.queue.length, this.size)
}

// Approach 2: Double-ended Queue
// By definition of the moving window, at each step, we add a new element to the window,
// and at the same time we remove the oldest element from the window.
// Here, we could apply a data structure called double-ended queue (a.k.a deque) to implement the moving window,
// which would have the constant time complexity (
//     O(1)
// O(1)) to add or remove an element from both its ends. With the deque, we could reduce the space complexity down to
// O(N)
// O(N) where
// N
// N is the size of the moving window.

const MovingAverage2 = function (k) {
    this.size = k
    this.queue = []
    this.windowSum = 0
    this.count = 0
}

MovingAverage2.prototype.next = function (val) {
    this.count += 1
    this.queue.push(val)
    let tail;
    if (this.count > this.size) {
        tail = this.queue.shift()
    } else {
        tail = 0
    }
    this.windowSum = this.windowSum - tail + val
    return this.windowSum / Math.min(this.count, this.size)
}


// Approach 3: Circular Queue with Array
// Other than the deque data structure, one could also apply another fun data structure called circular queue, which is basically a queue with the circular shape.
// The major advantage of circular queue is that by adding a new element to a full circular queue, it automatically discards the oldest element. Unlike deque, we do not need to explicitly remove the oldest element.
//     Another advantage of circular queue is that a single index suffices to keep track of both ends of the queue, unlike deque where we have to keep a pointer for each end.
// Time Complexity:
//     O(1)
// O(1), as we can see that there is no loop in the next(val) function.
// Space Complexity:
//     O( N)
// O(N), where
// N
// N is the size of the circular queue.
const MovingAverage3 = function (k) {
    this.size = k
    this.queue = new Array(k).fill(0)
    this.windowSum = 0
    this.head = 0
    this.count = 0
}
MovingAverage3.prototype.next = function (val) {
    this.count += 1
    let tail = (this.head + 1) % this.size
    this.windowSum = this.windowSum - this.queue[tail] + val
    this.head = (this.head + 1) % this.size
    this.queue[this.head] = val

    return this.windowSum / Math.min(this.count, this.size)
}
debugger
const m = new MovingAverage3(3)
let sum = m.next(3)
sum = m.next(1)
sum = m.next(10)
sum = m.next(3)
sum = m.next(5)
