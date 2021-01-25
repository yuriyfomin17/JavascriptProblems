/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Time complexity is O(nums1.length +nums2.length ) = O(N)
    // Space complexity is O(max(nums1,nums2)) since at worst case all elements are unique of
const intersect = function (nums1, nums2) {
    const dict = {}
    debugger
    nums1.map((el) => {
        if (dict[el] === undefined) {
            dict[el] = 1
        } else {
            dict[el] += 1
        }
    })
    const result = []
    nums2.map((el) => {
        if (dict[el] && dict[el] !== 0) {
            result.push(el)
            dict[el] -= 1
        } else if (dict[el] === 0) {
            delete dict[el]
        }
    })
    return result
};

console.log(
    intersect([1, 2, 2, 1], [2, 2])
)