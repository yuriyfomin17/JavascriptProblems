/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 2 Traversals
    // Time Complexity is O(lognN)
    // Space Complexity is O(1)
const search1 = function (nums, target) {
        let left = 0
        let right = nums.length - 1
        let pivot = 0
        debugger
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
                pivot = mid
                break
            } else if (nums[mid] > nums[0]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        if (target < nums[0] && target < nums[pivot]) {
            right = nums.length - 1
            left = pivot
        } else if (target >= nums[0] && target < nums[pivot]) {
            right = pivot
            left = 0
        } else {
            left = 0
            right = nums.length - 1
        }
        while (left <= right) {
            let guess = Math.floor((left + right) / 2)
            if (target === nums[pivot]) {
                return pivot
            }
            if (target === nums[pivot + 1]) {
                return pivot + 1
            }
            if (target === nums[guess]) {
                return guess
            } else if (target > nums[guess]) {
                left = guess + 1
            } else if (target < nums[guess]) {
                right = guess - 1
            }
        }
        return -1
    };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    if (nums.length === 0) {
        return -1
    }
    debugger
    let start = 0
    let end = nums.length - 1
    if (start === end && nums[start] === target) {
        return start
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target === nums[mid]) {
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

console.log(
    search(
        [4, 5, 6, 7, 0, 1, 2], 0
    )
)


