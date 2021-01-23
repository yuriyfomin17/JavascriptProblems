/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 2 Traversals
    // Time Complexity is O(lognN)
    // Space Complexity is O(1)
const search = function (nums, target) {
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
const search2 = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    debugger
    while (left < right) {
        let guess = Math.floor((left + right) / 2)
        if (nums[guess] === target) {
            return guess
        } else if (nums[guess] > nums[0] && target > nums[guess]) {
            left = guess + 1
        }else if(nums[guess] > nums[0] && target < nums[guess]){
            right = guess
        }else if(nums[guess] < nums[0] && target < nums[guess]){
            right = guess
        }else if(nums[guess] < nums[0] && target < nums[guess]){

        }
    }
    return -1
};

console.log(
    search2([4, 5, 6, 7, 0, 1, 2],
        0)
)