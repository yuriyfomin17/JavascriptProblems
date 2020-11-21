/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const candyCrush = function (board) {
    if (board.length === 0) {
        return [[]]
    }
    if (board[0].length === 0) {
        return [[]]
    }

    const rowWidth = board.length
    const colWidth = board[0].length
    let numNegative = 1
    while (numNegative) {
        numNegative = 0
        for (let currCol = 0; currCol < colWidth; currCol++) {
            let currRow = 0
            let currArr = []
            while (currRow < rowWidth) {
                if (currArr.length < 3) {
                    currArr.push(Math.abs(board[currRow][currCol]))
                } else {
                    let same = currArr.every(el => el === currArr[0])
                    if (same) {
                        board[currRow - 3][currCol] = Math.abs(board[currRow - 3][currCol]) * -1
                        board[currRow - 2][currCol] = Math.abs(board[currRow - 2][currCol]) * -1
                        board[currRow - 1][currCol] = Math.abs(board[currRow - 1][currCol]) * -1
                    }
                    currArr.shift()
                    currArr.push(board[currRow][currCol])
                }
                currRow += 1
            }
            let same = currArr.every(el => el === currArr[0])
            if (same) {
                board[currRow - 3][currCol] = Math.abs(board[currRow - 3][currCol]) * -1
                board[currRow - 2][currCol] = Math.abs(board[currRow - 2][currCol]) * -1
                board[currRow - 1][currCol] = Math.abs(board[currRow - 1][currCol]) * -1
            }
        }
        for (let currRow = 0; currRow < rowWidth; currRow++) {
            let currCol = 0
            let currArr = []
            while (currCol < colWidth) {
                if (currArr.length < 3) {
                    currArr.push(Math.abs(board[currRow][currCol]))
                } else {
                    let same = currArr.every(el => el === currArr[0])
                    if (same) {
                        board[currRow][currCol - 3] = Math.abs(board[currRow][currCol - 3]) * -1
                        board[currRow][currCol - 2] = Math.abs(board[currRow][currCol - 2]) * -1
                        board[currRow][currCol - 1] = Math.abs(board[currRow][currCol - 1]) * -1
                    }
                    currArr.shift()
                    currArr.push(board[currRow][currCol])
                }
                currCol+=1
            }
            let same = currArr.every(el => el === currArr[0])
            if (same) {
                board[currRow][currCol - 3] = Math.abs(board[currRow][currCol - 3]) * -1
                board[currRow][currCol - 2] = Math.abs(board[currRow][currCol - 2]) * -1
                board[currRow][currCol - 1] = Math.abs(board[currRow][currCol - 1]) * -1
            }
        }


        for (let currRow = 0; currRow < rowWidth; currRow++) {
            for (let currCol = 0; currCol < colWidth; currCol++) {
                if (board[currRow][currCol] < 0) {
                    board[currRow][currCol] = 0
                    numNegative += 1
                }
            }
        }
        debugger
        for (let currCol = 0; currCol < colWidth; currCol++) {
            let currRow = rowWidth - 1
            let startPointer
            let endPointer
            let start = false
            const currNums = []
            while (currRow >= 0) {
                if (board[currRow][currCol] === 0 && start === false) {
                    startPointer = currRow
                    start = true
                }
                if (board[currRow][currCol] !== 0 && start === true) {
                    endPointer = currRow
                    start = undefined
                }
                if (start === undefined) {
                    currNums.push(board[currRow][currCol])
                    board[currRow][currCol] = 0
                }
                currRow -= 1
            }
            for (let i = 0; i < currNums.length; i++) {
                board[startPointer][currCol] = currNums[i]
                startPointer -= 1
            }
        }
    }
    return board
};
console.log(
    candyCrush([[110, 5, 112, 113, 114], [210, 211, 5, 213, 214], [310, 311, 3, 313, 314], [410, 411, 412, 5, 414], [5, 1, 512, 3, 3], [610, 4, 1, 613, 614], [710, 1, 2, 713, 714], [810, 1, 2, 1, 1], [1, 1, 2, 2, 2], [4, 1, 4, 4, 1014]])

)



