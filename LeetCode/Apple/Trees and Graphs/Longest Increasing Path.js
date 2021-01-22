/**
 * @param {number[][]} matrix
 * @return {number}
 */
// TIme complexity O(mn). Each vertex/cell will be calculated once and only once and each edge
    // will be visited once and only once. The total time complexity is then O(V+E)
    // Space Complexity is O(mn) since cache dominates space complexity
const longestIncreasingPath = function (matrix) {
    let count = 0
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    if (matrix.length === 0) {
        return count
    }
    debugger
    const m = matrix.length
    const n = matrix[0].length

    const dfs = (matrix, x, y, cache) => {
        let max = 1
        if (cache[x][y] !== 0) {
            return cache[x][y]
        }
        for (let [dx, dy] of directions) {
            let nextX = x + dx
            let nextY = y + dy
            if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && matrix[nextX][nextY] > matrix[x][y]) {
                max = Math.max(max, dfs(matrix, nextX, nextY, cache)+1)
            }
        }
        cache[x][y] = max
        return max

    }


    debugger
    const cache = new Array(m)
        .fill()
        .map(() => new Array(n).fill(0));
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {

            count = Math.max(count, dfs(matrix, x, y, cache))
        }
    }
    return count
};

console.log(
    longestIncreasingPath(
        [[9, 9, 4], [6, 6, 8], [2, 1, 1]]
    )
)
