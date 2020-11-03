/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    let count = 0
    let removed
    while (count !== k) {
        removed = nums.pop()
        nums.unshift(removed)
        count += 1
    }
};