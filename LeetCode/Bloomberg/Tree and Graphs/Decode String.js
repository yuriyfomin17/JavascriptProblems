/**
 * @param {string} s
 * @return {string}
 */
// Time Complexity:O(maxK^countK * n) where maxK is the maximum value of k,
// countK is the count of nested k values and n is the max length of encoded string
    // Example, for s = 20[a10[bc]] , maxK is 20, countK is 2 as there 2 nested k values (20 and 10)
    // Also, there are 2 encoded string a and bc with maximum length of encoded string, n as 2

    // Space Complexity is O(sum (maxK^countK*n)) where maxK is the maximum value of k, countK is the count
    // of nested k values and n is the maximum length of encoded string
const decodeString = function (s) {
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
// console.log(
//     decodeString("3[a2[c]]")
// )
// Recursive
const decodeStringR = function(s) {
    debugger
    if(!s.length) return ''
    const endB = ']', startB = '['
    let endIdx = s.indexOf(endB)
    if(endIdx == -1) return s
    const end = endIdx+1;
    endIdx-- // move it away from bracket
    let res = ''
    while(startB !== s[endIdx]){
        res= s[endIdx--]+res // add it to the start
    }
    endIdx-- // move it away from bracket
    let n = ''
    while(!isNaN(s[endIdx])) n = s[endIdx--] + n // add it to the start
    const str = res.repeat(n)
    const start = endIdx
    s = s.substring(0,start+1) + str+ s.substring(end)
    s = decodeStringR(s)
    return s
};

console.log(
    decodeStringR("3[a2[c]]")
)
