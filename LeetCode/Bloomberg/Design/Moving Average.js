/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.array = []
    this.size = size
    this.sum = 0
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.array.length + 1 <= this.size) {
        this.array.push(val)
        this.sum = this.sum + val
        return this.sum / this.array.length
    } else {
        this.sum = this.sum - this.array.shift()
        this.sum = this.sum + val
        this.array.push(val)
        return this.sum / this.array.length
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
debugger
const obj = new MovingAverage(3)
console.log(obj.next(1))
console.log(obj.next(10))
console.log(obj.next(3))
console.log(obj.next(5))