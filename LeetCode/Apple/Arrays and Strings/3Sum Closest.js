/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Time Complexity: O(N^2) = O(N^2) + O(NlogN) = O(N^2) as we go through inner loop
    // SPace Complexity is O(logN) or O(N) depending on the implementation of the sorting algorithm
const threeSumClosest = function (nums, target) {
    // edge cases
    if (nums.length < 3) return []
    // sort array to implement O(n) two pointers inside the for loop
    nums.sort((a, b) => a - b)
    let result = nums[0] + nums[1] + nums[nums.length - 1]

    for (let i = 0; i < nums.length; i++) {
        // skip for better performance

        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            // two pointers, O(n)
            let left = i + 1
            let right = nums.length - 1
            while (left < right) {
                let cur = nums[i] + nums[left] + nums[right]
                if (cur === target) return cur
                else if (Math.abs(cur - target) < Math.abs(result - target)) result = cur
                else if (cur < target) {
                    left += 1
                } else {
                    right -= 1
                }
            }
        }
    }
    return result
};

