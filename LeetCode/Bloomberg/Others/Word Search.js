/**
 * @param {string[][]} board
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
    const helper = (currRow, currCol, index) => {
        debugger
        const rowDirection = [1, -1, 0, 0]
        const colDirection = [0, 0, -1, 1]
        if (board[currRow][currCol] !== word.charAt(index)) {
            return false
        }
        if (index === word.length - 1) {
            return true
        }
        board[currRow][currCol] = '-'
        for (let i = 0; i < 4; i++) {
            let nextRow = currRow + rowDirection[i]
            let nextCol = currCol + colDirection[i]
            if (nextRow >= 0 && nextRow < rowWidth && nextCol >= 0 && nextCol < colWidth && board[nextRow][nextCol] === word.charAt(index + 1)) {
                if (helper(nextRow, nextCol, index + 1)) {
                    return true
                }

            }

        }
        board[currRow][currCol] = word.charAt(index)
        return false

    }
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
    exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE")
)

// /**
//  * @param {character[][]} board
//  * @param {string} word
//  * @return {boolean}
//  */
// var exist = function (board, word) {
//     if (board.length === 0) {
//         return false;
//     }
//     const m = board.length;
//     const n = board[0].length;
//
//     if (word.length > m * n) {
//         return false;
//     }
//     /**
//      * The goal is to use backtracking to visit all the cells.
//      */
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (dfs(board, i, j, word, 0)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };
//
// function dfs(board, row, col, word, index) {
//     const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
//     const m = board.length;
//     const n = board[0].length;
//
//     if (board[row][col] !== word[index]) {
//         return false;
//     }
//     // we found the word if the characters are identical and it is the last
//     // character of the word.
//     if (index === word.length - 1) {
//         return true;
//     }
//     // mark as visited to enable backtracking
//     board[row][col] = '-';
//
//     // explore all available directions
//     for (const [dy, dx] of directions) {
//         const i = row + dy;
//         const j = col + dx;
//         // if the cell in the next direction is within the board and is identical
//         // as the next character in the word, we explore that path.
//         if (i >= 0 && j >= 0 && i < m && j < n && board[i][j] === word[index + 1]) {
//             if (dfs(board, i, j, word, index + 1)) {
//                 return true;
//             }
//             ;
//         }
//     }
//     ;
//     board[row][col] = word[index]; // reset backtracking
//
//     return false
// }