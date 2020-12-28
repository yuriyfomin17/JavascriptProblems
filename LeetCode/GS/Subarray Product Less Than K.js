/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time Complexity is O(N) where N is the length of nums. left can only be incremented at most N times
    // Space Complexity is O(1)
const numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) {
        return 0
    }

    let prod = 1
    let ans = 0
    let left = 0

    for (let right = 0; right < nums.length; right++) {
        prod *= nums[right]
        while (prod >= k) {
            prod /= nums[left++]
        }
        ans += right - left + 1

    }
    return ans
};