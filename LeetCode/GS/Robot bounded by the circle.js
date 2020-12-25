/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function (instructions) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    debugger
    instructions = instructions.split('')
    const point = [0, 0]
    let index = 0
    for (let i = 0; i < instructions.length; i++) {
        let currInstruct = instructions[i]
        if (currInstruct === 'L') {
            index = index - 1
            if (index < 0) {
                index = 3
            }
        } else if (currInstruct === 'R') {
            index = index + 1
            if (index > 3) {
                index = 0
            }
        } else if (currInstruct === 'G') {
            point[0] = point[0] + directions[index][0]
            point[1] = point[1] + directions[index][1]
        }

    }
    return point[0]===0 && point[1]===0 || index!==0
};

console.log(
    isRobotBounded("GL")
)