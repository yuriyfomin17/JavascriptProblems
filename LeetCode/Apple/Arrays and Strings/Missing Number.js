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

console.log(
    missingNumber(
        [3,0,1]
    )
)