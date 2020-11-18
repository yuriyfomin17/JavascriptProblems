/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
// Time Complexity is O(N*log(sumOfArray)). The binary search costs O(log(sumOfArray)) where sum of array
    // is the sum of elements in nums. For each computation of helper function time complexity is O(N) since we need to
    // go through whole array
    // Space complexity is O(N). Space is required to store the array
const splitArray = function (nums, m) {
    const n = nums.length
    debugger
    //Function to check if mid can be
    // maximum sub -arrays sum
    const helper = (mid, arr, n, k) => {
        let count = 0
        let sum = 0
        for (let i = 0; i < n; i++) {

            // if individual element is greater
            // maximum possible sum
            if (arr[i] > mid) {
                return false
            }
            // Increase sum of current sub-array
            sum += arr[i]

            // if sum is greater than
            // mid increase count
            if (sum > mid) {
                count++
                sum = arr[i]
            }
        }
        count++
        // Check condition
        if (count <= k) {
            return true
        }
        return false
    }

    let start = 1
    let end = 0
    for (let i = 0; i < n; i++) {
        end += nums[i]
    }
    let answer = 0
    // Answer stores possible
    // maximum sub array sum
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        debugger
        // if mid is possible solution
        // Put answer = mid
        if (helper(mid, nums, n, m)) {
            answer = mid
            end = mid - 1
        }else {
            start = mid + 1
        }
    }
    return answer
}
console.log(
    splitArray([1,2,3,4],3)
)

