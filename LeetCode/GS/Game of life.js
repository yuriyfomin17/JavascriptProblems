/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Time Complexity is O(M*N) where M is the number of rows and N is the number of columns
    // Space Complexity is O(M*N) the space is occupied by the board created initially
const gameOfLife = function (board) {
        const rowLength = board.length
        const colLength = board[0].length
        const copyBoard = []
        debugger
        for (let row = 0; row < rowLength; row++) {
            copyBoard.push([])
            for (let col = 0; col < colLength; col++) {
                copyBoard[row].push(board[row][col])
            }
        }

        const helper = (cell) => {
            let countLiveCells = 0
            const directions = [0, 1, -1]
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
        debugger
        for (let row = 0; row < rowLength; row++) {
            for (let col = 0; col < colLength; col++) {
                let liveCells = helper([row, col])
                // Rule 1 or Rule 3
                if (copyBoard[row][col] === 1 && (liveCells < 2 || liveCells > 3)) {
                    board[row][col] = 0
                }
                //Rule 4
                if (copyBoard[row][col] === 0 && liveCells === 3) {
                    board[row][col] = 1
                }
            }
        }
        return board
    };

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Time complexity is O(M* N) where M is the number of rows and N is the number of columns
    // Space Complexity is O(1)
const gameOfLife = function (board) {
    const rowLength = board.length
    const colLength = board[0].length
    const helper = (cell) => {
        let countLiveCells = 0
        const directions = [0, 1, -1]
        let [x, y] = cell
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!(directions[i] === 0 && directions[j] === 0)) {
                    let nextX = x + directions[i]
                    let nextY = y + directions[j]
                    if ((nextX < rowLength && nextX >= 0) && (nextY < colLength && nextY >= 0) && (Math.abs(board[nextX][nextY])===1)) {
                        countLiveCells += 1
                    }

                }
            }
        }
        return countLiveCells
    }
    debugger
    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            let liveCells = helper([row, col])
            // Rule 1 or Rule 3
            if (board[row][col] === 1 && (liveCells < 2 || liveCells > 3)) {
                // -1 signifies the cell is now dead but originally was live.
                board[row][col] = -1
            }
            //Rule 4
            if (board[row][col] === 0 && liveCells === 3) {
                // 2 signifies the cell is now live but was originally dead.
                board[row][col] = 2
            }
        }
    }
    // Get the final representation for the newly updated board.
    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (board[row][col] > 0) {
                board[row][col] = 1
            }else {
                board[row][col] = 0
            }
        }
    }
    return board
};