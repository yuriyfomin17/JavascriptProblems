/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Time Complexity is O(M*N) where M is the number of rows and N is the number of columns
    // Space Complexity is O(M*N) the space is occupied by the board created initially
const gridGame = function (board, K, rules) {
        const rowLength = board.length
        const colLength = board[0].length
        debugger
        const copyFun = (grid) => {
            const copyBoard = []
            for (let row = 0; row < rowLength; row++) {
                copyBoard.push([])
                for (let col = 0; col < colLength; col++) {
                    copyBoard[row].push(grid[row][col])
                }
            }
            return copyBoard
        }


        const helper = (cell, copy) => {
            let countLiveCells = 0
            const directions = [0, 1, -1]
            let copyBoard = copy
            let [x, y] = cell
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!(directions[i] === 0 && directions[j] === 0)) {
                        let nextX = x + directions[i]
                        let nextY = y + directions[j]
                        if ((nextX < rowLength && nextX >= 0) && (nextY < colLength && nextY >= 0) && (copyBoard[nextX][nextY] === 1)) {
                            countLiveCells += 1
                        }

                    }
                }
            }
            return countLiveCells
        }
        for (let step = 0; step < K; step++) {
            let copyBoard = copyFun(board)
            for (let row = 0; row < rowLength; row++) {
                for (let col = 0; col < colLength; col++) {
                    let liveCells = helper([row, col], copyBoard)
                    if ((liveCells === 3 || liveCells === 5)) {
                        board[row][col] = 1
                    } else {
                        board[row][col] = 0
                    }
                }
            }
        }
        return board
    };


console.log(
    gridGame([[0, 1, 1, 0], [1, 1, 0, 0]], 2)
)