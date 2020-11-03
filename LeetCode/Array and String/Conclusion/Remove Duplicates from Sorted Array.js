/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity is O(n^2) since we iterate over entire array once and at the same
// time utilize function lasIndexOf
// Space Complexity is O(1) since we are not utilizing any extra space to store the result
const removeDuplicates = function (nums) {
    nums.map((el, index) => {
        let lastIndex = nums.lastIndexOf(el)
        if (index !== lastIndex) {
            let count = 0
            let indexToDelete = index
            while (count !== lastIndex - index) {
                nums.splice(index, 1)
                indexToDelete += 1
                count += 1
            }
        }
    })
    return nums.length
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity is O(N) since we iterate through every element N in the array
// Space complexity is O(1) since we are not utilizing extra space to store the result
const removeDuplicates2 = function (nums) {
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[count] !== nums[i]) {
            count += 1
            nums[count] = nums[i]
        }
    }
    return count + 1
};



