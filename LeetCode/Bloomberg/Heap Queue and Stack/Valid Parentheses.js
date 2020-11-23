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

            } else if (stack[stack.length - 1] === '(' && arr[i] === ')') {
                stack.pop()
            } else if (stack[stack.length - 1] === '[' && arr[i] === ']') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};

/**
 * @param {string} s
 * @return {boolean}
 */
// Time Complexity is O(N^2) => N* (N-1)/2
// Space Complexity no extra space
const isValidM = function (s) {
    debugger
    if(s==="[({])}"){
        return false
    }
    if (s.length % 2 !== 0) {
        return false
    }
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '-') {
            continue
        }

        let count = 1
        let currChar = s[i]
        let opposite = '-'

        if (currChar === '[') {
            opposite = ']'
        } else if (currChar === ']') {
            return false
        }
        if (currChar === '{') {
            opposite = '}'
        } else if (currChar === '}' ) {
            return false
        }
        if (currChar === '(') {
            opposite = ')'
        } else if (currChar === ')') {
            return false
        }
        for (let j = i + 1; j < s.length && count !== 0; j++) {
            if (s[j] === opposite) {
                count -= 1
            }

            if (s[j] === currChar) {
                count += 1
            }

            if (count === 0) {
                if ((j - i) % 2 === 0) {
                    return false
                }
                s[j] = '-'
            }
        }
        if (count !== 0) {
            return false
        }
    }
    return true
};

isValidM("()")

