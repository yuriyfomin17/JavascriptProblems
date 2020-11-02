/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// time Complexity is O(N) since we map over all members of matrix
// Space Complexity is O(N) where N is the size of dictionary adn array of result     

const spiralOrder = function (matrix) {
    if(matrix.length===0){
        return []
    }
    const columnDirect = [1, 0, -1, 0]
    const rowDirection = [0, 1, 0, -1]
    const rowWidth = matrix.length
    const columnHeight = matrix[0].length
    let currRow = 0
    let currColumn = 0
    const dict = new Map()
    let indexDirection = 0
    const result = []
    let previousRow = 0
    let previousColumn = 0
    while (dict.size !== rowWidth * columnHeight) {
        if (
            currRow >= 0 && currColumn >= 0
            && currRow < rowWidth &&
            currColumn < columnHeight &&
            !dict.has('' + currRow + currColumn)
        ) {
            dict.set('' + currRow + currColumn, matrix[currRow][currColumn])
            result.push(matrix[currRow][currColumn])
        } else {
            if (indexDirection === 3) {
                indexDirection = 0
            } else {
                indexDirection += 1
            }
            currRow = previousRow
            currColumn = previousColumn
        }
        previousRow = currRow
        previousColumn = currColumn
        currRow = currRow + rowDirection[indexDirection]
        currColumn = currColumn + columnDirect[indexDirection]
    }

    return result
};

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]))