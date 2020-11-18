/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// TIme Complexity O(NlogN + NlogW) where NlogN is the sorting of the array. LogW comes from the binary search
// and it Happens that we do O(N) calls inside it to calculate count
// Space Complexity is O(1) since we don't utilize any extra space
const smallestDistancePair = function (nums, k) {
    debugger
    nums.sort(function (a, b) {
        if (a >= b) {
            return 1
        } else {
            return -1
        }
    })
    let low = 0
    let high = nums[nums.length - 1] - nums[0]
    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        let count = 0
        let left = 0
        // Count the number of pairs with distance which are smaller then mid
        for (let right = 0; right < nums.length; right++) {
            while (nums[right] - nums[left] > mid) {
                left += 1
            }
            count += right - left
        }
        if (count >= k) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return low
};
console.log(
    smallestDistancePair([1, 3, 1, 4, 10, 7, 5], 2)
)
