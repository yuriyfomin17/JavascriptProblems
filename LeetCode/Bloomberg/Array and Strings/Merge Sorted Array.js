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



var merge = function(nums1, m, nums2, n) {
    if (n == 0) return; // no need to do change anything

    let idx1 = m-1, idx2 = n-1, end = m+n-1;
    while (idx2 >= 0) {
        if (nums1[idx1] > nums2[idx2]) {
            // nums1[idx1] is greater than nums2[idx2]
            nums1[end] = nums1[idx1];
            idx1--;
        } else {
            // 1st case: nums1[idx1] is undefined
            // 2nd case: nums2[idx2] is greater than nums1[idx1]
            // 3rd case: nums2[idx2] is equal to nums1[idx1]
            nums1[end] = nums2[idx2];
            idx2--;
        }
        end--;
    }
    // Time Complexity: O(m+n)
    // Space Complexity: O(1)
};