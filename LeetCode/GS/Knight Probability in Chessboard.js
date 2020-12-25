/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
const knightProbability = function (N, K, r, c) {
    if(K===0 && r<=N && c<=N){
        return 1
    }
    const change1 = [1, -1]
    const change2 = [2, -2]
    const xRange = N - 1
    const yRange = N - 1
    debugger
    const helper = (point) => {
        const possiblePoints = []
        const [x, y] = point
        let count = 0
        change1.map(el1 => {
            change2.map(el2 => {
                let nextX = x + el1
                let nextY = y + el2
                if (nextX <= xRange && nextY <= yRange && nextX >= 0 && nextY >= 0) {
                    count += 1
                    possiblePoints.push([x + el1, y + el2])
                }
                nextX = x + el2
                nextY = y + el1
                if (nextX <= xRange && nextY <= yRange && nextX >= 0 && nextY >= 0) {
                    count += 1
                    possiblePoints.push([x + el2, y + el1])
                }
            })
        })

        return possiblePoints
    }

    let probability = 1 / 8
    const queue = [[r, c]]
    let sum  = 0
    while (queue.length !== 0 && K !== 0) {
        let size = queue.length
        K -= 1
        for (let i = 0; i < size && K!==0; i++) {
            let startProbability
            let currPoint
            if (size === 1) {
                currPoint = queue.shift()
                startProbability = probability
            } else {
                [startProbability, currPoint] = queue.shift()
            }

            const possiblePoints = helper(currPoint)
            possiblePoints.map(el => {
                queue.push([startProbability * possiblePoints.length / 8, el])
            })


        }

    }
    queue.map(el=>{
        sum = sum + el[0]
    })
    return sum
};

console.log(
    knightProbability(3, 1, 0, 0)
)