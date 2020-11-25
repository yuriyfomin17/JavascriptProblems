/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
    const stack = []
    s = s.split('')
    debugger
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i - 1] !== s[i]) {
            stack.push(1)
        } else {
            stack[stack.length - 1] += 1
            if (stack[stack.length - 1] === k) {
                stack.pop()
                s.splice(i - k + 1, k)
                i = i - k
            }
        }
    }
    return s.join('')
};
console.log(
    removeDuplicates("deeedbbcccbdaa", 3)
)

