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
    // Sort the intervals by start time
    startTime.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    // Sort the interval by end time
    endTime.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    // Two pointers in the algorithm
    let startPointer = 0
    let endPointer = 0
    // Variable to keep track of max number of rooms used
    let numMeetingRoom = 0
    while (startPointer < endTime.length) {
        //if there is a meeting that has ended by the time the meeting
        //at the startPointer starts
        if (startTime[startPointer] >= endTime[endPointer]) {
            numMeetingRoom -= 1
            endPointer += 1
        }
        // We do this irrespective of whether a room frees up or not
        // if room got free, then this used_room+=1 wouldn't have any effect
        // used rooms would have remain the same in that case. if no room was free,
        //then this would increase used rooms
        startPointer += 1
        numMeetingRoom += 1

    }
    return numMeetingRoom
};