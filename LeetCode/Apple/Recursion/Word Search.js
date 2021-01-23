// My best guess would be that time complexity is O(M*(3^L))
// where M is the number of cells on the board and L is the maximum Length of the board
// 1. Algorithm loops over each cell on board so M is the factor in fomula.
// It then depends on the maximum number of steps we need to find word. We can have at most 4 directions to explore
// however we know that 1 is in visited dictionary and we can't go there so it becomes that we hae onle 3 directions to explore
//
// Space Complexity is O(L) where L is the length of the word to be matched. Main consumption lies in recursion calls

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    if (board.length === 0) {
        return false
    }
    const rowLength = board.length
    const colLength = board[0].length
    const rowDirection = [-1, 1, 0, 0]
    const colDirection = [0, 0, 1, -1]

    const helper = (currRow, currCol, index, copyBoard) => {
        if (word.charAt(index) !== board[currRow][currCol]) {
            return false
        }
        if (word.length - 1 === index) {
            return true
        }
        board[currRow][currCol] = "-"
        for (let i = 0; i < 4; i++) {
            let nextRow = currRow + rowDirection[i]
            let nextCol = currCol + colDirection[i]
            if (nextRow >= 0 && nextRow < rowLength && nextCol >= 0 && nextCol <= colLength && board[nextRow][nextCol] === word.charAt(index + 1)) {
                if(helper(nextRow,nextCol, index+1)){
                    return true
                }
            }
        }
        board[currRow][currCol] = word.charAt(index)
        return false
    }

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (helper(row,col,0)){
                return  true
            }
        }
    }
    return false

};

console.log(
    exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")
)