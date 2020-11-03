/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let count = 0
    let windowSize = 0
    for (let i = count; i < nums.length; i++) {
        count = i
        while (nums[count] === 1) {
            count += 1
        }
        if (windowSize < count - i) {
            windowSize = count - i
            i = count
        }

    }
    return windowSize
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])