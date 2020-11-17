/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// Time Complexity is O(N logN) + O(Klog(K))=> O(Nlog(N)) assuming K is smaller
// SPace Complexity is O(K) where K is the number of elements in resul t
const findClosestElements = function (arr, k, x) {
    debugger
    arr.sort(function (a, b) {
        if (Math.abs(x - a) < Math.abs(x - b)) {
            return -1
        } else {
            return 1
        }

    })
    const result = arr.slice(0, k)
    result.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    return result

};
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements2 = function (arr, k, x) {
    // 1. The given array is already sorted in ascending order.
    // 2. We need to pick k elements from the array whose absolute difference is the smallest to x
    // 3. If there is a tie, the smaller elements are preferred.
    // 4. the result should be sorted in ascending order.
    // The first approach I will try is binary search since the given array is sorted.
    let left = 0
    let right = arr.length - 1
    let mid;
    while (left + 1 < right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] < x) {
            left = mid;
        } else {
            right = mid
        }

    }
    debugger
    let pivot = (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) ? left : right; // in case of tie, we choose the smaller one (which is on the left)
    let startIndex = pivot
    let endIndex = pivot + 1;
    while (k && startIndex >= 0 && endIndex <= arr.length) {
        if (Math.abs(arr[startIndex] - x) > Math.abs(arr[endIndex] - x)) endIndex++;
        else startIndex--;
        k--;
    }
    return arr.slice(startIndex + 1, endIndex + k);
};
console.log(
    findClosestElements2([1, 2, 3, 4, 5],
        3,
        3)
)

