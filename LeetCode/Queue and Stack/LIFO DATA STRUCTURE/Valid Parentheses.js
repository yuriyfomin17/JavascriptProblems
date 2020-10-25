// Given a string s containing just
// the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

const isValid = function (s) {
    debugger
    const allString = []
    s.trim().split('').map(el => {
        if (el !== '') {
            allString.push(el.trim())
        }
    })
    const stack = [];
    const openBrackets = ['[', '{', '(']
    const closingBrackets = [']', '}', ')']
    for (let i = 0; i < allString.length; i++) {
        if (openBrackets.includes(allString[i])) {
            stack.push(allString[i])
        } else {
            if (stack[stack.length - 1] === '(' && allString[i] === ')' || stack[stack.length - 1] === '{' && allString[i] === '}' || stack[stack.length - 1] === '[' && allString[i] === ']') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0

};
console.log(isValid("()"))