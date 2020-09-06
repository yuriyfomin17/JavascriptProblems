// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water
// and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

function isSafe(rooms, currRow, currColumn) {
    return currColumn >= 0 && currColumn < rooms[0].length && currRow >= 0 && currRow < rooms.length
}

const numIslands = function (rooms) {
        let changeRow = [-1, 0, 0, 1]
        let changeColumn = [0, 1, -1, 0]
        const queue = []
        let count = 0
        debugger
        rooms.map(function (element, row) {
            element.map(function (el, column) {
                let pos = [row, column, 0]
                if (el === '1') {
                    queue.unshift(pos)
                    rooms[row][column] = 0

                }
                let index = false
                while (queue.length !== 0) {
                    index = true
                    let currElem = queue[queue.length - 1]
                    let row = currElem[0]
                    let column = currElem[1]
                    for (let i = 0; i < 4; i++) {
                        let currRow = row + changeRow[i]
                        let currColumn = column + changeColumn[i]
                        if (isSafe(rooms, currRow, currColumn) && rooms[currRow][currColumn] === "1") {
                            rooms[currRow][currColumn] = rooms[row][column] + 1
                            queue.unshift([currRow, currColumn, rooms[currRow][currColumn]])
                        }
                    }
                    queue.pop()
                }
                if (index) {

                    ++count
                }
            })
        })

        return count

    }


;
numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ]
)