const evalRPN = function (tokens) {
    const stack = []
    const operations = ['/', '+', '-', '*']
    for (let i = 0; i < tokens.length; ++i) {
        if (!operations.includes(tokens[i])) {
            stack.push(tokens[i])
        } else {
            if (tokens[i] === '+') {
                let num1 = stack.pop()
                let num2 = stack.pop()
                stack.push(Number(num1) + Number(num2))
            }
            if (tokens[i] === '-') {
                let num1 = stack.pop()
                let num2 = stack.pop()
                stack.push(Number(num2) - Number(num1))
            }
            if (tokens[i] === '*') {
                let num1 = stack.pop()
                let num2 = stack.pop()
                stack.push(Number(num1) * Number(num2))
            }
            if (tokens[i] === '/') {
                let num1 = stack.pop()
                let num2 = stack.pop()
                stack.push(Math.trunc(Number(num2) / Number(num1)))
            }
        }
    }
    return stack[0]
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))