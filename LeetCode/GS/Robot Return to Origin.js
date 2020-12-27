/**
 * @param {string} moves
 * @return {boolean}
 */
// Time Complexity is O(N) where N is the length of moves
    // Space Complexity is O(1)
const judgeCircle = function (moves) {
    const direction = [[0, 1], [0, -1], [-1, 0], [1, 0]]
    moves = moves.split('')
    let x = 0
    let y = 0
    moves.map(el => {
        if (el === 'U') {
            let [dx, dy] = direction[0]
            x = x + dx
            y = y + dy
        }
        if (el === 'D') {
            let [dx, dy] = direction[1]
            x = x + dx
            y = y + dy
        }
        if (el === 'L') {
            let [dx, dy] = direction[2]
            x = x + dx
            y = y + dy
        }
        if (el === 'R') {
            let [dx, dy] = direction[3]
            x = x + dx
            y = y + dy
        }
    })
    return x===0 && y=== 0
};