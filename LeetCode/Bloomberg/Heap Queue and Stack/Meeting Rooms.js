/**
 * @param {number[][]} intervals
 * @return {number}
 */
// Time complexity is O(NlogN) as we are sorting two arrays for start timing and end timing
// individually and each of them contain N elements considering the are N intervals
// Space complexity is O(N) since we are having two arrays of size N to keep track of stat and end time
const minMeetingRooms = function (intervals) {
    const startTime = []
    const endTime = []
    intervals.map(el => {
        startTime.push(el[0])
        endTime.push(el[1])
    })
    startTime.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    endTime.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    let startPointer = 0
    let endPointer = 0
    let numMeeting = 0
    while (startPointer < endTime.length) {
        if (startTime[startPointer] >= endTime[endPointer]) {
            startPointer += 1
            endPointer += 1
        } else {
            startPointer+=1
            numMeeting += 1
        }
    }
    return numMeeting
};