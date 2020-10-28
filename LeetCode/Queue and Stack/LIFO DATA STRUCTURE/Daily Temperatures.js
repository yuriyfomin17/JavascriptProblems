// Given a list of daily temperatures T, return a list such that,
// for each day in the input, tells you how many days you would have
// to wait until a warmer temperature. If there is no future day for
// which this is possible, put 0 instead.
// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73],
// your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Time Complexity:O(NW)O(NW), where NN is the length of T and W
// W is the number of allowed values for T[i]. Since W = 71
// W=71, we can consider this complexity O(N) O(N).Space Complexity:O(N + W)
// O(N+W), the size of the answer and the next array.

const dailyTemperatures = function (T) {
    debugger
    const stack = []
    const days = []
    for (let i = 0; i < T.length; i++) {
        console.log('----CUrr---', T[i])
        let index = false
        for (let k = i + 1; k < T.length; k++) {
            if (T[i] < T[k]) {
                index = true
                days.push(k - i)
                break
            }
        }
        if (!index) {
            days.push(0)
        }
    }
    return days
};

// Time Complexity:O(N) O(N), where N N is the length of T and W W is the number
// of allowed values for T[i]. Each index gets pushed and popped at most once from the stack.
// Space Complexity: O(W)
// O(W). The size of the stack is bounded as it represents strictly increasing temperatures.


const dailyTemperatures2 = function (T) {
    const stack = []
    const days = []
    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length >= 1 && T[i] >= stack[0][1]) {
            stack.shift()
        }
        stack.unshift([i, T[i]])
        if (stack.length > 1) {

            days.unshift(stack[1][0] - stack[0][0])
        } else {
            days.unshift(0)
        }
    }
    return days
};

console.log(dailyTemperatures2([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]))
