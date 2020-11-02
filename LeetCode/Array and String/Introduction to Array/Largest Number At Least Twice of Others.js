/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity is O(N) where N is the number of nodes
// Space complexity is O(1) since we are not storing anything
const dominantIndex = function (nums) {
    let max = -Infinity;
    let index = 0
    if (nums.length === 1) {
        return 0
    }
    nums.map((el, i) => {
        if (el > max) {
            max = el
            index = i
        }
    })
    debugger
    for (let i = 0; i < nums.length; i++) {
        if (max - nums[i] < max / 2 && i !== index) {
            return -1
        }

    }

    return index
};
console.log(dominantIndex([0, 0, 3, 2]))