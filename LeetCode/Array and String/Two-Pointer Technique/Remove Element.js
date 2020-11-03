/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// Time complexity is O(N) where n is the size of an array
// Space complexity is O(1) since we are not utilizing any extra sapce
const removeElement = function (nums, val) {
    let count = 0;
    nums.map((el, index) => {
        if (el !== val) {
            nums[count] = el
            count += 1
        }
    })
    return count
};