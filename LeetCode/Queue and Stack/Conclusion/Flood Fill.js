const isSafe = (currRow, currColumn, width, height) => {
    return currRow >= 0 && currRow < width && currColumn >= 0 && currColumn < height
}
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
// BFS time complexity O(N) since we are processing every pixel
// Space Complexity is O(N) where N is the size of the stack
const floodFill = function (image, sr, sc, newColor) {
    let queue = []
    let rowDirection = [1, 0, -1, 0]
    let colDirection = [0, 1, 0, -1]
    let starting = image[sr][sc];
    let width = image.length
    let height = image[0].length
    queue.push([sr, sc])
    while (queue.length !== 0) {
        let rootNode = queue[0]
        let [startRow, startColumn] = rootNode
        for (let i = 0; i < 4; i++) {
            let currRow = startRow + rowDirection[i]
            let currColumn = startColumn + colDirection[i]
            if (isSafe(currRow, currColumn, width, height)) {
                let currColor = image[currRow][currColumn]
                if (currColor !== newColor && currColor === starting) {
                    image[currRow][currColumn] = newColor
                    queue.push([currRow, currColumn])
                }

            }

        }
        if (queue.length > 1) {
            image[startRow][startColumn] = newColor
        } else {
            image[sr][sc] = newColor
            return image
        }
        queue.shift()
    }


    image[sr][sc] = newColor
    return image
};

const floodFillBFS = function (image, sr, sc, newColor) {

    function dfs(currRow, currCol, newColor, oldColor) {
        if (oldColor === newColor) {
            return image
        }
        if (currRow < 0 || currCol < 0 || currRow === image.length || currCol === image[0].length || image[currRow][currCol] !== oldColor) {
            return image
        }
        image[currRow][currCol] = newColor
        dfs(currRow + 1, currCol, newColor, oldColor)
        dfs(currRow - 1, currCol, newColor, oldColor)
        dfs(currRow, currCol + 1, newColor, oldColor)
        dfs(currRow, currCol - 1, newColor, oldColor)
    }

    dfs(sr, sc, newColor, image[sr][sc])
    return image
};
console.log(floodFillBFS([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))