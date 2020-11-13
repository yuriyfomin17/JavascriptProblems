/**
 * @param {string[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
    if (board.length === 0) {
        return []
    }
    const result = []
    const rowWidth = board.length
    const colWidth = board[0].length
    const helper = (currRow, currCol, indexLetter, word, visited) => {
        const rowDirection = [1, -1, 0, 0]
        const colDirection = [0, 0, 1, -1]

        if (word.charAt(indexLetter) !== board[currRow][currCol]) {
            return false
        }
        if (indexLetter === word.length - 1) {
            return true
        }
        visited['' + currRow + currCol] = 1
        for (let i = 0; i < 4; i++) {
            let nextRow = currRow + rowDirection[i]
            let nextCol = currCol + colDirection[i]
            if
            (
                nextRow >= 0
                && nextRow < rowWidth
                && nextCol >= 0
                && nextCol < colWidth
                && word.charAt(indexLetter + 1) === board[nextRow][nextCol]
                && !visited['' + nextRow + nextCol]
            ) {
                if (helper(nextRow, nextCol, indexLetter + 1, word, visited)) {
                    return true
                }

            }

        }
        delete visited['' + currRow + currCol]
        return false


    }
    const resultDict = {}
    for (let row = 0; row < rowWidth; row++) {
        for (let col = 0; col < colWidth; col++) {
            for (let i = 0; i < words.length; i++) {
                let visited = {}
                if (helper(row, col, 0, words[i], visited) && !resultDict[words[i]]) {
                    resultDict[words[i]] = 1
                    result.push(words[i])
                }
            }
        }
    }
    return result
};
console.log(
    findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "eat", "rain"])
)
