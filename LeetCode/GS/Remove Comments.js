/**
 * @param {string[]} source
 * @return {string[]}
 */
// Time complexity is O(S) where S is the total length of the source code
    // Space Complexity is O(S) the space used by recording the source code into ans
const removeComments = function (source) {
    let inBlock = false
    const answer = []
    debugger
    let newLine = []
    source.map(line => {
        let i = 0
        if (!inBlock) {
            newLine = []
        }
        line = line.split('')
        while (i < line.length) {
            if (!inBlock && i + 1 < line.length && line[i] === '/' && line[i + 1] === '*') {
                inBlock = true
                i++
            } else if (inBlock && i + 1 < line.length && line[i] === '*' && line[i + 1] === '/') {
                inBlock = false
                i++
            } else if (!inBlock && i + 1 < line.length && line[i] === '/' && line[i + 1] === '/') {
                break
            } else if (!inBlock) {
                newLine.push(line[i])
            }
            i += 1
        }
        if(!inBlock && newLine.length>0){
            answer.push(newLine.join(''))
        }
    })
    return answer
};
console.log(
    removeComments(["a/*comment", "line", "more_comment*/b"])
)
