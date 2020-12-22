
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

