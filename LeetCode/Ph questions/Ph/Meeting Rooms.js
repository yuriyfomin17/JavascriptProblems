/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = function (intervals) {
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
        if(a>b){
            return 1
        }else {
            return -1
        }
    })
};