/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time Complexity is O(N) where N is the size of an array
//  SPace Complexity is O(1) since we are not taking any extra space
const moveZeroes = function (nums) {
    let count = 0;
    debugger
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let previous = nums[count]
            nums[count] = nums[i]
            nums[i] = previous
            count++
        }
    }
};

moveZeroes([0, 1, 0, 3, 12])