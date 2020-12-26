/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
const knightProbability = function (N, K, r, c) {
    const routes = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [1, -2], [-1, 2], [1, 2]];
    let grid = new Array(K + 1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N)));
    grid[0][r][c] = 1
    debugger

    const helper = (point, k) => {
        const [x, y] = point
        let probability = 0
        for (let i = 0; i < routes.length; i++) {
            let [dx, dy] = routes[i]
            let nextX = x + dx
            let nextY = y + dy
            if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) {
                continue
            } else {
                if (grid[k][nextX][nextY]) {
                    probability += grid[k][nextX][nextY]
                }
            }
        }
        return probability
    }
    for (let k = 1; k <= K; k++) {
        for (let row = 0; row < N; row++) {
            for (let col = 0; col < N; col++) {
                grid[k][row][col] = helper([row, col], k - 1) / 8
                console.log(grid)
            }
        }
    }
    let answer = 0

    console.log(grid)
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            answer += grid[K][row][col]
        }
    }
    return answer
};

console.log(
    knightProbability(3, 2, 0, 0)
)

