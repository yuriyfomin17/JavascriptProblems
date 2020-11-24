/**
 * Initialize your data structure here.
 * @param {number} size
 */
const MovingAverage = function (size) {
    this.size = size
    this.arr = []
    this.sum = 0
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.size >= this.arr.length+1) {
        this.sum = this.sum + val
        this.arr.push(val)
        const result = this.sum / this.arr.length
        return result
    } else {
        this.sum = this.sum - this.arr.shift()
        this.sum = this.sum + val
        this.arr.push(val)
        const result = this.sum / this.arr.length
        return result
    }
};
debugger
const m = new MovingAverage(3);
m.next(1)
m.next(10)
m.next(3)
m.next(5)


