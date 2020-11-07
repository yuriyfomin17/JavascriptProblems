/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
    debugger
    let result = ''
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) !== ']') {
            stack.push(s.charAt(i))
        } else {
            let repeatString = ''
            while (stack[stack.length - 1] !== '[') {
                repeatString = stack.pop() + repeatString
            }
            stack.pop()
            let number = ''
            while (!isNaN(stack[stack.length - 1])) {
                number = stack.pop() + number
            }
            repeatString = repeatString.repeat(Number(number))
            stack.push(repeatString)
        }
    }
    return stack.reduce((acc, val) => acc + val, '')
};
console.log(
    decodeString("3[a2[c]]")
)
