const findDepth = (string) => {
    debugger
    const arrString = string.split('')
    const stack = []
    let maxDepth = -Infinity
    let count = 0
    let currString = ''
    const dict = {}
    let index = false
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] === "(") {
            index = false
            count += 1
            stack.push(arrString[i])
        } else if (arrString[i] === ")") {
            index = true
            count -= 1
            stack.pop()
        } else {
            currString = currString + arrString[i]
        }

        if (count > maxDepth) {
            maxDepth = count

        }

    }
    return maxDepth
}


const maxDepthString = (s) => {
    debugger
    let depth = 0
    let maxDepth = 0
    let bestStart = 0
    let bestEnd = 0
    for (let i = 0; i < s.length; i++) {
        let letter = s.charAt(i)
        if (letter === '(') {
            depth++
            if (depth > maxDepth) {
                maxDepth = depth
                bestStart = i + 1
            }
        } else if (letter === ')') {
            if(depth ===maxDepth){
                bestEnd = i
            }
            depth--
        }
    }
    return s.substring(bestStart, bestEnd)
}
console.log(
    maxDepthString('((AB)(((CD))))')
)

