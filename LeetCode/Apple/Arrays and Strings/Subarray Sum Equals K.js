/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time Complexity is O(N) where N is the length of the array
    // Space Complexity can be as Big as O(N) where N is the length of the array
const subarraySum = function (nums, k) {
    const dict = {}
    let sum = 0
    let count = 0
    dict[0] = 1
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        if (dict[sum - k]) {
            count += dict[sum - k]
        }
        if (dict[sum] === undefined) {
            dict[sum] = 1
        } else {
            dict[sum] = dict[sum] + 1
        }
    }
    return count
};

console.log(
    subarraySum(
        [1, 1, 1], 2
    )
)