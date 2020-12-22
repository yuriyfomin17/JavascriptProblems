/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
    this.arr = new Map()
    for(let i = 0; i<nums.length; i++){
        if (this.arr.has(nums[i])) {
            this.arr.set(nums[i], this.arr.get(nums[i]) + 1)
        } else {
            this.arr.set(nums[i], 1)
        }
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
    for (let [key, value] of this.arr.entries()) {
        if (value === 1) {
            return key
        }
    }
    return -1
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
    if (this.arr.has(value)) {
        this.arr.set(value, this.arr.get(value) + 1)
    } else {
        this.arr.set(value, 1)
    }


};
debugger
const firstUnique = new FirstUnique([7, 7, 7, 7, 7, 7]);
firstUnique.showFirstUnique(); // return -1
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17);
// the queue is now [7,7,7,7,7,7,7,3,3,7,17]
console.log(
    firstUnique.showFirstUnique()
)
// return 17