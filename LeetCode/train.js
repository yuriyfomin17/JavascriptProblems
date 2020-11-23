/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
    let str = ''
    const arr = s.split('')
    const stack = []
    debugger
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ']') {
            stack.push(arr[i])
        } else {
            let currStr = ''
            while (stack[stack.length - 1] !== '[') {
                currStr = stack.pop() + currStr
            }
            stack.pop()
            let num = ''
            while (!isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num
            }
            currStr = currStr.repeat(num)
            stack.push(currStr)
        }
    }
    return stack.reduce((acc, val) => {
        return acc + val
    }, '')
};
console.log(
    decodeString("100[leetcode]")
)