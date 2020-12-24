/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Time Complexity is O(N min(k, n)). it costs O(min(k, n)) time for each linear search
    // and we do at most n comparisons in one search even if k is larger than n
    // Space Complexity is O(1)
const containsNearbyDuplicate = function (nums, k) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = Math.max(0, i - k); j < i; j++) {
                if (nums[i] === nums[j]) {
                    return true
                }
            }
        }
        return false
    };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Time Complexity is O(N) since we perform a linear scan across all the array
    // Space Complexity is O(min(N, k)) extra space depends on the number of items stored in hast table
const containsNearbyDuplicate2 = function (nums, k) {
    const dict = {}
    debugger
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]] !== undefined) {
            return true
        } else {
            dict[nums[i]] = i
            delete dict[nums[i - k]]
        }

    }
    return false

};

console.log(
    containsNearbyDuplicate2([1, 2, 3, 1],
        3)
)