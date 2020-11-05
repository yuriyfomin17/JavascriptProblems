/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const candyCrush = function (board) {
    let rowWidth = board.length
    let colWidth = board[0].length
    let index = true
    while (index) {
        for (let row = 0; row < rowWidth; row++) {
            let currCol = 0
            while (currCol < colWidth - 2) {
                let currArr = board[row].slice(currCol, currCol + 3)
                let allEqual = currArr.every(val => Math.abs(val) === Math.abs(currArr[0]))
                if (allEqual) {
                    for (let i = currCol; i <= currCol + 2; i++) {
                        board[row][i] = -Math.abs(board[row][i])
                    }
                }
                currCol += 1
            }
        }
        let allEqual
        for (let column = 0; column < colWidth; column++) {
            let currRow = 0
            let currArr = []
            if (column === 1) {
            }
            while (currRow < rowWidth) {
                currArr.push(board[currRow][column])
                if (currArr.length >= 3) {

                    allEqual = currArr.every(val => Math.abs(val) === Math.abs(currArr[0]))
                    if (allEqual) {
                        for (let i = currRow; i >= currRow - 2; i--) {
                            board[i][column] = -Math.abs(board[i][column])
                        }
                    }
                    currArr.shift()
                }
                currRow += 1
            }
        }
        let count = 0
        for (let row = 0; row < rowWidth; row++) {
            for (let column = 0; column < colWidth; column++) {
                if (board[row][column] < 0) {
                    board[row][column] = 0
                    count += 1
                }
            }
        }
        if (count === 0) {
            index = false
        }
        let array = []
        for (let column = 0; column < colWidth; column++) {
            let currRow = 0
            if (column === 1) {
            }
            while (currRow < rowWidth) {
                if (board[currRow][column] !== 0) {
                    array.push(board[currRow][column])
                    board[currRow][column] = 0
                }
                currRow += 1
            }
            array = array.reverse()
            for (let i = currRow - 1; i >= 0 && array.length !== 0; i--) {
                board[i][column] = array.shift()
            }
        }

    }
    return board
};

console.log(candyCrush([
    [110, 5, 112, 113, 114],
    [210, 211, 5, 213, 214],
    [310, 311, 3, 313, 314],
    [410, 411, 412, 5, 414],
    [5, 1, 512, 3, 3],
    [610, 4, 1, 613, 614],
    [710, 1, 2, 713, 714],
    [810, 1, 2, 1, 1],
    [1, 1, 2, 2, 2],
    [4, 1, 4, 4, 1014]]))