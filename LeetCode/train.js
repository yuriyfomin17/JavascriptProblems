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
debugger
const randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom();