/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// Time Complexity is O(n min(k, n)). It costs O(min(k, n)) time for each linear search
    // Note that we do at most n comparisons in one search even if k can be larger than n
    // Space complexity is O(1)
const containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = Math.max(0, i - k); j < i; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true
            }
        }
    }
    return false
};