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
        if(index){
            dict[maxDepth] = currString
            currString = ''
            index = false
        }
        if (count > maxDepth) {
            maxDepth = count

        }

    }
}
findDepth('((AB)(((CD))))')
