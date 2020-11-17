/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const dict = {}
    nums1.map(el => {
        if (!dict[el]) {
            dict[el] = 1
        } else {
            dict[el] = dict[el] + 1
        }
    })
    const result = []
    nums2.map(el => {
        if (el in dict) {
            if (dict[el] !== 0) {
                result.push(el)
                dict[el] -= 1
            } else {
                delete dict[el]
            }
        }
    })
    return result

};