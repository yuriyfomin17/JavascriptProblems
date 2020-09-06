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


const wallsAndGates = function (rooms) {
    const queue = []
    rooms.map(function (element, row) {
        element.map(function (el, column) {
            let pos = [row, column, el]
            if (el === 0) {
                queue.push(pos)
            }
        })
    })
    while (queue.length !== 0) {
        let currElem = queue.unshift()
        let row = currElem[0]
        let column = currElem[1]
        let dest = currElem[2]
        for (let row = 0; row < rooms.length; ++row) {
            for (let column = 0; column < rooms[row].length; ++column) {
                let source = rooms[row][column]
                for (let sourceRow = 0; sourceRow < rooms.length; ++sourceRow) {
                    for (let sourceCol = 0; sourceCol < rooms[sourceRow].length; ++sourceCol) {
                        if(rooms[sourceRow][sourceCol]===-1){
                            continue
                        }

                    }
                }
            }
        }
    }


};