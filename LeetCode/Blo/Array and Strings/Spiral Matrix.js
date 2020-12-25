/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Time complexity is O(N) since we iterate through the entire matrix exactly once
// Space complexity is O(K) which is the lenght of the dictionary and O(N) where n is the length of the result array
const spiralOrder = function (matrix) {
    let count = 0
    let rowWidth = matrix.length
    if(rowWidth===0){
        return []
    }
    let columnWidth = matrix[0].length
    const length = rowWidth * columnWidth
    const columnDirect = [1, 0, -1, 0]
    const rowDirection = [0, 1, 0, -1]
    const result = []
    let index = 0
    let currRow = 0
    let currColumn = 0
    const set = new Set()
    while (count !== length) {
        while (currColumn >= 0 && currRow >= 0 && currRow < rowWidth && currColumn < columnWidth && !set.has('' + currRow + currColumn)) {
            result.push(matrix[currRow][currColumn])
            set.add('' + currRow + currColumn)
            count += 1
            currRow = currRow + rowDirection[index]
            currColumn = currColumn + columnDirect[index]
        }
        currRow = currRow - rowDirection[index]
        currColumn = currColumn - columnDirect[index]
        if (index === 3) {
            index = 0
        } else {
            index += 1
        }
        currRow = currRow + rowDirection[index]
        currColumn = currColumn + columnDirect[index]
    }
    return result
};

spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])