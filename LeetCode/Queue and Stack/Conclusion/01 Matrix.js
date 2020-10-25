//Time complexity is O((r * c)^2) as we iterate over entire matrix
// Space complexity is O(r * c) as the space is required for the matrix
const updateMatrixBrute = function (matrix) {
    matrix.map((rowEl, row) => {
        rowEl.map((el, column) => {
            if (el === 1) {
                matrix[row][column] = Infinity
            }
        })
    })
    matrix.map((rowEl, row) => {
        rowEl.map((el, column) => {
            if (el === Infinity) {
                matrix.map((currRowEl, currRow) => {
                    currRowEl.map((currEl, currCol) => {
                        if (currEl === 0 ) {
                            let currDist = Math.abs(column - currCol) + Math.abs(row - currRow)
                            if(currDist<matrix[row][column]){
                                matrix[row][column] = currDist
                            }
                        }
                    })
                })
            }
        })
    })


    return matrix
};
console.log(updateMatrixBrute([[0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]]))

const isSafe = (currRow, currColumn, width, height) => {
    return currRow >= 0 && currRow < width && currColumn >= 0 && currColumn < height
}
//Time complexity:O(r⋅c)
// Since, the new cells are added to the queue only if
// their current distance is greater than the calculated distance,
// cells are not likely to be added multiple times.
//Space complexity:O(r*c). AdditionalO( r*c) for the queue
const updateMatrixBFS = function (matrix) {
    const queue = []
    const width = matrix.length
    const height = matrix[0].length
    const rowDirection = [1, -1, 0, 0]
    const colDirection = [0, 0, 1, -1]
    matrix.map((rowEl, row) => {
        rowEl.map((el, column) => {
            if (el === 1) {
                matrix[row][column] = Infinity
            }
            if (el === 0) {
                queue.push([row, column])
            }
        })
    })
    while (queue.length !== 0) {
        let [startRow, startColumn] = queue.shift()
        let currRow;
        let currCol
        for (let i = 0; i < 4; i++) {
            currRow = startRow + rowDirection[i]
            currCol = startColumn + colDirection[i]
            if (isSafe(currRow, currCol, width, height)) {
                if (matrix[currRow][currCol] > matrix[startRow][startColumn] + 1) {
                    matrix[currRow][currCol] = matrix[startRow][startColumn] + 1
                    queue.push([currRow, currCol])
                }
            }
        }
    }


    return matrix
};

