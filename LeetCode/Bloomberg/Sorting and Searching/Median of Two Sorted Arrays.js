/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    nums1.push(...nums2)
    nums1.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    let medIndex = nums1.length % 2 === 1 ? Math.trunc(nums1.length / 2) : [nums1.length / 2 - 1, nums1.length / 2]
    if(Array.isArray(medIndex)){
        return (nums1[medIndex[0]] + nums1[medIndex[1]])/2
    }else{
        return nums1[medIndex]
    }
};
console.log(findMedianSortedArrays([1,2],[3,4]))