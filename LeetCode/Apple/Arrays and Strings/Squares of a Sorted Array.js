/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time Complexity is O(N) where N is the size of an array
    // Space Complexity is O(N) if take into account size of an answer otherwise it is O(1)
const sortedSquares = function (nums) {
    const result = new Array(nums.length)
    let left = 0
    let right = nums.length - 1
    debugger
    let index = nums.length - 1
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[index]= Math.pow(nums[left], 2)
            index-=1
            left += 1
        } else {
            result[index]= Math.pow(nums[right], 2)
            index-=1
            right -= 1
        }
    }
    return result

};

console.log(
    sortedSquares([-4, -1, 0, 3, 10])
)
