/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
    const start = []
    const end = []
    intervals.map(el => {
        start.push(el[0])
        end.push(el[1])
    })

    start.sort(function (a, b) {
        if (a >= b) {
            return 1
        } else {
            return -1
        }
    })
    end.sort(function (a, b) {
        if (a >= b) {
            return 1
        } else {
            return -1
        }

    })
    let numberRooms = 0
    let startPointer = 0
    let endPointer = 0
    while (startPointer < start.length) {
        if (end[endPointer] <= start[startPointer + 1]) {
            numberRooms -= 1
            endPointer+=1
        }
        startPointer+=1
        numberRooms += 1
    }
    return numberRooms
};
console.log(
    minMeetingRooms([[0, 30],[5, 10],[15, 20]])

)


