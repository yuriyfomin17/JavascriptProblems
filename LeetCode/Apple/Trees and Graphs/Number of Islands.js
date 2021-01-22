/**
 * @param {string[][]} grid
 * @return {number}
 */
// Time complexity is O(R*C) where r is number of rows and c is the number of columns since we are traversing
// each node once
// Space Complexity is O(min(R*C)) in worst case all grid is island
const numIslands = function (grid) {
    const queue = []
    const rowDirection = [1, -1, 0, 0]
    const colDirection = [0, 0, 1, -1]
    let count = 0
    const rowWidth = grid.length
    const colWidth = grid[0].length
    for (let row = 0; row < rowWidth; row++) {
        for (let column = 0; column < colWidth; column++) {
            if (grid[row][column] === '1') {
                count += 1
                queue.push([row, column])
                while (queue.length !== 0) {
                    let [elemRow, elemColumn] = queue.shift()
                    for (let i = 0; i < 4; i++) {
                        let currRow = elemRow + rowDirection[i]
                        let currCol = elemColumn + colDirection[i]
                        if (currRow >= 0 && currRow < rowWidth && currCol >= 0 && currCol < colWidth) {
                            if (grid[currRow][currCol] === '1') {
                                queue.push([currRow, currCol])
                                grid[currRow][currCol] = '0'
                            }
                        }
                    }
                }
            }
        }
    }
    return count

};