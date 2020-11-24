/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
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