/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
    this.nums = []
    this.map = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map[val]===undefined) {
        this.map[val] = this.nums.length
        this.nums.push(val)
        return true
    }
    return false
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map[val]!==undefined) {
        const indexToDelete = this.map[val]
        const lastElemArr = this.nums[this.nums.length - 1]
        this.map[lastElemArr] = indexToDelete
        delete this.map[val]

        this.nums[indexToDelete] = lastElemArr
        this.nums[this.nums.length - 1] = val
        this.nums.pop()
        return true
    }
    return false

};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomIndex = Math.floor(Math.random() * this.nums.length)
    return this.nums[randomIndex]

};