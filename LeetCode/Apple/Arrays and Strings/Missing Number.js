/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity is O(N)
    // Space Complexity is O(N) since we do keep the arrays elements in dictioanry
const missingNumber = function (nums) {
        debugger
        const dict = {}
        for (let i = 0; i <= nums.length; i++) {
            dict[i] = 1
        }
        for (let i = 0; i < nums.length; i++) {
            delete dict[nums[i]]
        }

        return Object.keys(dict)[0]
    };
// Time Complexity is O(N)
// Space complexity is O(1) since it uses only constant number of memeroy
const missingNumber = function (nums) {
    const expectedSum = nums.length * (nums.length + 1) / 2
    let actualSum = 0
    for (let i = 0; i < nums.length; i++) {
        actualSum = actualSum + nums[i]
    }
    return expectedSum - actualSum
};

