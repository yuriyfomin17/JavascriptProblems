/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    if (board.length === 0) {
        return false
    }

    const rowWidth = board.length
    const colWidth = board[0].length

    if (word.length > rowWidth * colWidth) {
        return false
    }

    const rowDirection = [1, -1, 0, 0]
    const colDirection = [0, 0, -1, 1]

    const helper = (currRow, currCol, startIndex) => {
        if (board[currRow][currCol] !== word.charAt(startIndex)) {
            return false
        }
        if (startIndex === word.length - 1) {
            return true
        }
        board[currRow][currCol] = '-'
        for (let i = 0; i < 4; i++) {
            let newRow = currRow + rowDirection[i]
            let newCol = currCol + colDirection[i]
            if (newRow >= 0 && newRow < rowWidth && newCol >= 0 && newCol < colWidth && board[newRow][newCol] === word.charAt(startIndex + 1)) {
                if(helper(newRow, newCol, startIndex + 1)){
                    return true
                }
            }
        }

        board[currRow][currCol] = word.charAt(startIndex)
        return false

    }

    debugger

    for (let row = 0; row < rowWidth; row++) {
        for (let col = 0; col < colWidth; col++) {
            if (helper(row, col, 0)) {
                return true
            }
        }
    }
    return false
};
console.log(
    exist([
        ["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]
    ], "ABCB")

)


