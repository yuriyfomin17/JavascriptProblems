var Solution = function(nums) {
    this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    return this.original
        .map(n => [Math.random(),n])
        .sort((a,b) => a[0] - b[0])
        .map(([r,n]) => n);
};