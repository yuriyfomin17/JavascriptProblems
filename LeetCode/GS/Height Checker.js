/**
 * @param {number[]} heights
 * @return {number}
 */
// Time Complexity is O(NlogN) + O(N) = O(NlogN)  where N is the number of elements in the array
    // Space Complexity is O(N) since we store copy of elements
const heightChecker = function (heights) {
    let count = 0
    const copy = heights.slice()
    heights.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    copy.map((el, index) => {
        if (el !== heights[index]) {
            count += 1
        }
    })
    return  count

};