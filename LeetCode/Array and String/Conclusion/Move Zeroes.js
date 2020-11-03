/**
 * @param {number[]} nums
 *
 */
// Time complexity is O(N) since we iterate through every element at once
// SPace complexity is O(1) since we are not utilizing eny extra space
const moveZeroes = function (nums) {
    let count = 0

    for (let i = count; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let previous = nums[count]
            nums[count] = nums[i]
            nums[i] = previous
            count++
        }
    }


    return nums
};
const moveZeroesM = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let previous = nums[count]
            nums[count++] = nums[i]
            nums[i] = previous

        }
    }
    return nums
};

moveZeroesM([0, 1, 0, 3, 12])

