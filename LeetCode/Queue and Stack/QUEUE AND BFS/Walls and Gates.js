// You are given a m x n 2D grid initialized with these three possible values.
//
// -1 - A wall or an obstacle.
// 0 - A gate.
// INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.


// Approach #1 (Brute Force) [Time Limit Exceeded]
//The brute force approach is simple,
// we just implement a breadth-first search from each empty room to its nearest gate.
//  While we are doing the search, we use a 2D array called distance to keep track of
// the distance from the starting point. It also implicitly tell us whether a position had been visited
// so it won't be inserted into the queue again.

function isSafe(rooms, currRow, currColumn) {
    return currColumn >= 0 && currColumn < rooms[0].length && currRow >= 0 && currRow < rooms.length
}

const wallsAndGates = function (rooms) {
        let changeRow = [-1, 0, 0, 1]
        let changeColumn = [0, 1, -1, 0]
        const queue = []
        rooms.map(function (element, row) {
            element.map(function (el, column) {
                let pos = [row, column, el]
                if (el === 0) {
                    queue.push(pos)

                }
            })
        })
        debugger
        while (queue.length !== 0) {

            let currElem = queue[0]
            let row = currElem[0]
            let column = currElem[1]
            for (let i = 0; i < 4; i++) {
                let currRow = row + changeRow[i]
                let currColumn = column + changeColumn[i]
                if (isSafe(rooms, currRow, currColumn) && rooms[currRow][currColumn] === 2147483647) {
                    rooms[currRow][currColumn] = rooms[row][column] + 1
                    queue.push([currRow, currColumn, rooms[currRow][currColumn]])
                    console.log(rooms)
                }

            }

            queue.shift()
        }


    }


;
wallsAndGates([
        [2147483647, -1, 0, 2147483647],
        [2147483647, 2147483647, 2147483647, -1],
        [2147483647, -1, 2147483647, -1],
        [0, -1, 2147483647, 2147483647]
    ]
)