/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Time Complexity is O(Nlog(N)) + O(N) for iterating
// Space Complexity is O(1)
const merge = function (intervals) {
    if (intervals.length === 0) {
        return []
    }

    intervals.sort(function (a, b) {
        if (a[0] >= b[0]) {
            return 1
        } else {
            return -1
        }
    })
    let pointer = 1
    while (pointer < intervals.length) {
        if (intervals[pointer - 1][1] >= intervals[pointer][0]) {
            let end = Math.max(intervals[pointer][1], intervals[pointer - 1][1])
            intervals[pointer - 1][1] = end
            intervals.splice(pointer, 1)
        }else {
            pointer += 1
        }
    }
    return intervals
};
console.log(
    merge([[1, 4], [0, 2], [3, 5]])
)
