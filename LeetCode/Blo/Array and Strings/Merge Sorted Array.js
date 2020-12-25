/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    debugger
    nums1.splice(m, nums1.length)
    nums1.push(...nums2)
    nums1.sort((a, b) => a-b)
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3
)

// Time Complexity: O(m+n)
// Space Complexity: O(1)
const merge = function (nums1, m, nums2, n) {
    let index2 = n - 1
    let index1 = m - 1
    let end = m + n - 1
    while (index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            // nums1[idx1] is greater than nums2[idx2]
            nums1[end] = nums1[index1]
            index1 -= 1
        } else {
            // 1st case: nums1[idx1] is undefined
            // 2nd case: nums2[idx2] is greater than nums1[idx1]
            // 3rd case: nums2[idx2] is equal to nums1[idx1]
            nums1[end] = nums2[index2]
            index2-=1
        }
        end -= 1
    }
    return nums1
};
