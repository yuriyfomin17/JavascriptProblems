/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Time complexity is O(log(N))
// Space complexity is O(1)
const search = function (nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }

        } else {
            if (target <= nums[end] && target > nums[mid]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
};
console.log(search([3, 1], 1))