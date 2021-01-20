/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time complexity is O(n^2) Nlog(N) is taken to sort the array while we iterating n time through array and in eahc iteration we iterate through
// the rest of the array which is n^2 + nlogn which is O(n^2)
// Space complexity is O(K) where k is the size of the result plus size of the dictioany to keep visited keys
const threeSum = function (nums) {
    debugger
    nums.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    const result = []
    debugger
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1;
        let right = nums.length - 1
        let threeSum = nums[i] + nums[left] + nums[right]
        let previous = ''
        while (left < right) {
            if (threeSum < 0) {
                left += 1
            } else if (threeSum > 0) {
                right -= 1
            } else if (threeSum === 0) {
                let current = '' + nums[i] + nums[left] + nums[right]
                if (current !== previous) {
                    previous = current
                    result.push([nums[i], nums[left], nums[right]])
                }
                left+=1
            }
            threeSum = nums[i] + nums[left] + nums[right]


        }
    }
    return result

};

console.log(
    threeSum([-1, 0, 1, 2, -1, -4])
)