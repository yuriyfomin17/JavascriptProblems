/**
 * @param {string} s
 * @return {boolean}
 */
// Time Complexity is O(N) where N is the number of chars in array
// Space Complexity is O(N) where N is the number of elements stored in stack
const isValid = function (s) {
    const arr = s.split('')
    const stack = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '}' && arr[i] !== ']' && arr[i] !== ')') {
            stack.push(arr[i])
        } else {
            if (stack[stack.length - 1] === '{' && arr[i] === '}') {
                stack.pop()

            }else if(stack[stack.length - 1] === '(' && arr[i] === ')'){
                stack.pop()
            } else if(stack[stack.length - 1] === '[' && arr[i] === ']'){
                stack.pop()
            }else {
                return false
            }
        }
    }
    return stack.length===0
};