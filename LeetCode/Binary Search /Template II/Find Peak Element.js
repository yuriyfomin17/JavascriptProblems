/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[mid + 1]) {
            right = mid
        }
        if (nums[mid] <= nums[mid + 1]) {
            left = mid + 1
        }
    }

    return left
};

findPeakElement([1, 2, 3, 1])