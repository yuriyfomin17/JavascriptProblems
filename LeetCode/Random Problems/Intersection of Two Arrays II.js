/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Time Complexity is O(n1 + n2)
    // Space Complexity is O(n1) where n1 is the number of elements in num1
const intersect = function (nums1, nums2) {
        const dict = {}
        nums1.map(el => {
            if (!dict[el]) {
                dict[el] = 1
            } else if (dict[el]) {
                dict[el] += 1
            }
        })

        const result = []
        nums2.map(el => {
            if (dict[el] && dict[el] !== 0) {
                result.push(el)
                dict[el] -= 1
            }
        })
        return result
    };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Time Complexity is O(N1log(N1)) + O(N2log(N2))
    // Space Complexity is O(1) if don't count result array
const intersect = function (nums1, nums2) {
    nums1.sort(function (a, b) {
        if (a >= b) {
            return 1
        } else {
            return -1
        }

    })

    nums2.sort(function (a, b) {
        if (a >= b) {
            return 1
        } else {
            return -1
        }
    })
    let pointer1 = 0
    let pointer2 = 0
    const result = []
    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (nums1[pointer1] < nums2[pointer2]) {
            pointer1 += 1
        } else if (nums1[pointer1] > nums2[pointer2]) {
            pointer2 += 1
        }
        if (nums1[pointer1] === nums2[pointer2]) {
            result.push(nums1[pointer1])
            pointer1 += 1
            pointer2 += 1
        }
    }
    return result
};