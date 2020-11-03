/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
    let windowSize = Infinity
    let left = 0
    let size = nums.length
    let sum = 0
    for (let i = 0; i < size; i++) {
        sum = sum + nums[i]
        while (sum >= s) {
            sum = sum - nums[left]
            windowSize = Math.min(windowSize, i - left + 1)
            left += 1
        }
    }
    return windowSize === Infinity ? 0 : windowSize
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3])