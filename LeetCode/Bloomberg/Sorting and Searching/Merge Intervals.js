const merge = function (intervals) {
    if(intervals.length===0){
        return []
    }
    const start = []
    const end = []
    intervals.map(el => {
        start.push(el[0])
        end.push(el[1])
    })
    start.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }

    })
    end.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }

    })
    let currStart = start[0]
    let currEnd = end[0]
    let size = start.length

    const result = []
    for (let i = 1; i <= size - 1; i++) {
        if (currEnd >= start[i]) {
            currEnd = end[i]
        } else {
            result.push([currStart, currEnd])
            currStart = start[i]
            currEnd = end[i ]
        }
    }
    result.push([currStart, currEnd])
    return result
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// TIme complexity is O(Nlog(N)) other then sorting we do a linear  scan of the list
// Space complexity is O(n) where n is the number of elements in array of results

const merge = function (intervals) {
    if(intervals.length===0){
        return []
    }
    intervals.sort(function (a, b) {
        if (a[0] > b[0]) {
            return 1
        } else {
            return -1
        }

    })
    let currEnd = intervals[0][1]
    let currStart = intervals[0][0]
    const result = []
    for (let i = 1; i < intervals.length; i++) {
        if (currStart <= intervals[i][0] && currEnd >= intervals[i][0]) {
            currEnd = Math.max(currEnd, intervals[i][1])
        } else {
            result.push([currStart, currEnd])
            currEnd = intervals[i][1]
            currStart = intervals[i][0]
        }

    }
    result.push([currStart, currEnd])
    return result
};
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
