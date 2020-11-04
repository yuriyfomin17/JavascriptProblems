/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity is O(n* k) since we iterate over wholce array num n times and each time we search for first index of remainder again
// n * k  where     n is the whole length of the array where k = n - 1 + n - 2 + n - 3
// Space Complexity is O(1) where it  is the length of answer array which is 2
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i]
        let indexOfRemainder = nums.indexOf(remainder, i + 1)
        if (indexOfRemainder !== -1) {
            return [i, indexOfRemainder]
        }
    }
    return []
};

// Time complexity is at most O(N) since we iterate through an array N time
// We trade space complexity for speed hence Space complexity  is O(K) where K is the length of
// the dictionary  which at most can be equal to the length of the string
const twoSumHash = function (nums, target) {
    const dict = new Map()
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i]
        if (dict.has(remainder)) {
            return [i, dict.get(remainder)]
        } else {
            dict.set(nums[i], i)
        }
    }
    return []
};


















