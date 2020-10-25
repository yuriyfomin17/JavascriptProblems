const openLock = function (deadends, target) {
    const visited = new Set()
    deadends.map(el=>visited.add(el))
    if (visited.has("0000")) {
        return -1
    }
    const queue = []
    queue.push('0000')
    let level = 0
    while (queue.length !== 0) {
        let size = queue.length
        for (let n = 0; n < size; n++) {
            let nodeNumber = queue.shift()
            if (visited.has(nodeNumber)) {
                continue
            }
            if (target === nodeNumber) {
                return level
            }
            visited.add(nodeNumber)
            let currNumber = nodeNumber
            currNumber = currNumber.split('')
            currNumber.map((el, index) => currNumber[index] = Number(el))
            for (let pos = 0; pos < 4; ++pos) {
                let currCopyPlus = currNumber.slice()
                let currCopyMinus = currNumber.slice()
                currCopyPlus[pos] = currCopyPlus[pos] + 1
                currCopyMinus[pos] = currCopyMinus[pos] - 1
                currCopyPlus[pos] = currCopyPlus[pos] > 9 ? 0 : currCopyPlus[pos]
                currCopyMinus[pos] = currCopyMinus[pos] < 0 ? 9 : currCopyMinus[pos]

                let stringNumPlus = "" + currCopyPlus[0] + currCopyPlus[1] + currCopyPlus[2] + currCopyPlus[3]
                let stringNumMinus = "" + currCopyMinus[0] + currCopyMinus[1] + currCopyMinus[2] + currCopyMinus[3]
                if (!visited.has(stringNumPlus)) {
                    queue.push(stringNumPlus)
                }
                if (!visited.has(stringNumMinus)) {
                    queue.push(stringNumMinus)
                }
            }
        }
        level = level + 1
    }
    return -1
};
console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))
