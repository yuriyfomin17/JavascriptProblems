/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Time Complexity is O(log(N)) since we halve the search
// Space Complexity is O(1)
const search = function (nums, target) {
    if (nums.length === 0) {
        return -1
    }
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let guess = Math.round((left + right) / 2)
        if (nums[guess] < target) {
            left = guess + 1
        } else if (nums[guess] > target) {
            right = guess - 1
        } else {
            return guess
        }
    }
    return -1
};

console.log(
    search([-1, 0, 3, 5, 9, 12], 9)
)