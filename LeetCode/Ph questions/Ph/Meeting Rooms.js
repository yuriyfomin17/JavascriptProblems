/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

// Time Complexity is O(Nlog(N)) since it is dominated by sorting
// Space Complexity is O(1)
const canAttendMeetings = function (intervals) {


    intervals.sort(function (a, b) {
        if (a[0] >= b[0]) {
            return 1
        } else {
            return -1
        }
    })

    debugger
    for (let i = 1; i < intervals.length; i++) {
        if(intervals[i-1][1]>intervals[i][0]){
            return false
        }
    }
    return true
};
console.log(
    canAttendMeetings([[7,10],[2,4]])

)
