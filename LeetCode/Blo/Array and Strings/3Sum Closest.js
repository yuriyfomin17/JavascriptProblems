/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    nums.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    let resultSum = 0
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right]

        }
    }
    return resultSum
};

console.log(
    threeSumClosest([-1, 2, 1, -4], 1)
)