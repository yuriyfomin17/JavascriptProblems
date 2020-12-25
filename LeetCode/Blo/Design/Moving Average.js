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