/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity is O(N^3) where N is the length of the string Since We iterate three time third time to calculte reuslt
// Space complexity is O(1) since we store result in variable maxSum
const maxSubArray = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let maxSum = -Infinity
    const dict = {}
    for (let start = 0; start < nums.length; start++) {
        for (let end = nums.length; end > start; end--) {
            let newArr = nums.slice(start, end)
            let sum = newArr.reduce((acc, val) => {
                return acc + val
            })
            maxSum = Math.max(maxSum, sum)
        }
    }
    return maxSum
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray2 = function (nums) {
    debugger
    const size = nums.length
    let currSum = nums[0]
    let maxSum = nums[0]
    for (let i = 1; i < size; i++) {
        currSum = Math.max(nums[i], currSum + nums[i])
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
};



const maxSubArray3 = function (nums) {
    const size = nums.length
    let maxSum = nums[0]
    for (let i = 1; i < size; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
        maxSum= Math.max(nums[i], maxSum)
    }
    return maxSum
};

console.log(
    maxSubArray3([-2, 1, -3, 4, -1, 2, 1, -5, 4])
)

