function shortestValue(queue, target) {
    let min = Infinity
    let resultIndex=0;
    queue.map(function (element, index) {
        let sum  = 0
        for(let i = 0; i<4; i++){
            sum = sum + Number(target[i]) - Number(element[i])
        }
        if(sum<min){
            min = sum
            resultIndex=index
        }
    })
    return resultIndex
}
const openLock = function (deadends, target) {
    if(deadends.includes("0000")){
        return -1
    }
    debugger
    const queue = []
    queue.push('0000')
    let step = 0
    let index;
    while (queue.length !== 0) {
        for (let pos = 0; pos < 4; pos++) {
            for (let i = 0; i < 2; i++) {
                let index = shortestValue(queue, target)
                let currNumber = queue[index].slice()
                let number
                if (i === 0 && currNumber[pos] !== "9") {
                    number = Number(currNumber[pos]) + 1
                    number = String(number)
                }
                if (i === 1 && currNumber[pos] !== "0") {
                    number = Number(currNumber[pos]) - 1
                    number = String(number)
                }
                if (i === 0 && currNumber[pos] === "9") {
                    number = "0"
                }
                if (i === 1 && currNumber[pos] === "0") {
                    number = "9"
                }


                currNumber = currNumber.slice(0, pos) + number + currNumber.slice(pos + 1, currNumber.length)


                if (!deadends.includes(currNumber)) {
                    queue.push(currNumber)
                }
                if (currNumber === target) {
                    return step + 1
                }

            }
        }
        queue.splice(index,1)
        ++step
    }
    return step
};
console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))
