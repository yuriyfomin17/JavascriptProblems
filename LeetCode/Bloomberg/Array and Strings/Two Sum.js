/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time complexity I believe is O(n^2) since we scan through whole array
// and then we scan the rest of the array in each iteration of N
// Space complexity is O(1) since we are not utilizing any extra space
const twoSum = function (nums, target) {
    let remainder = 0
    for (let i = 0; i < nums.length; i++) {
        remainder = target - nums[i]
        let indexOfRemainder = nums.indexOf(remainder, i + 1)
        if (indexOfRemainder !== -1) {
            return [i, indexOfRemainder]
        }
    }
    return []
};

// We can reduce time complexity by trading space for speed via utilization of hash
// table since look up in hash table is O(1).
// And we iterate through array once so time complexity is O(N)
// Space complexity is O(N) where N is the size of the  hash table

const twoSumHash = function (nums, target) {
    let remainder = 0
    const dict = new Map()
    for (let i = 0; i < nums.length; i++) {
        remainder = target - nums[i]
        if (dict.has(remainder)) {
            return [i, dict.get(remainder)]
        } else {
            dict.set(nums[i], i)
        }

    }
    return []
};
console.log(twoSumHash([3, 2, 4], 6))



















