const numSquares = function (target) {
    const squareNum = []

    if(Math.pow(target,0.5)%1===0){
        return 1
    }
    for (let i = 1; i < Math.pow(target, 0.5); ++i) {
        squareNum.push(i * i)
    }
    let queue = []
    queue.push(target)
    let level = 0

    while (queue.length !== 0) {
        level = level + 1
        const nextQueue = new Set()

        for (let i = 0; i < queue.length; ++i) {
            for (let k = 0; k < squareNum.length; ++k) {
                if(queue[i]===squareNum[k]){
                    return level
                }
                if(queue[i]<squareNum[k]){
                    break
                }else{
                    nextQueue.add(queue[i]-squareNum[k])
                }

            }
        }
    queue = Array.from(nextQueue)
    }
    return level
};
numSquares(12)