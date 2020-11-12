/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.set = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (typeof this.set[val] !=="number") {
        this.set[val] = val
        return true
    } else {
        return false
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (typeof this.set[val] === "number") {
        delete this.set[val]
        return true
    } else {
        return false
    }

};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {

    let arr = Array.from(Object.keys(this.set))
    const random = Math.ceil(Math.random() * arr.length) - 1
    const result = Number(arr[random])
    return result

};
debugger
const randomizedSet = new RandomizedSet();
randomizedSet.remove(0);
randomizedSet.remove(0);
randomizedSet.insert(0); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(0); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(0); // 2 was already in the set, so return false.
console.log(
    randomizedSet.getRandom()
)
