/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    // if input1 length is greater than swap the inputs
    // since we always partition small array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }
    const x = nums1.length
    const y = nums2.length
    let low = 0
    let high = x
    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2)
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX

        // if partitionX is 0 it means nothing is there on the left side. Use -INF for maxLeftX
        // if partitionX is the length of input then there is nothing on the right side. Use +INF for minRightX
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1]
        let minRightX = (partitionX === x) ? Infinity : nums1[partitionX]

        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1]
        let minRightY = (partitionY === y) ? Infinity : nums2[partitionY]

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // We have partitioned array at correct place
            // Now get max of left elements
            // and min of Right elements to get the median case of even length combined array size
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
            }else {
                return Math.max(maxLeftX, maxLeftY)
            }
        }else if(maxLeftX>minRightY){ // we are too far on the right side for partitionX. Go on left side
            high = partitionX - 1
        }else {// we are too far on the left side for partitionX. Go on right side
            low = partitionX + 1
        }

    }
};