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
