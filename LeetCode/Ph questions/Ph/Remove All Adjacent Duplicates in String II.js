// TIme Complexity is n^2/k where n is a string length. We scan through the string
// no more than n/k times

// Space complexity is O(1)
const removeDuplicates = function (s, k) {
    s = s.split('')
    let length = -1
    debugger
    while (length !== s.length) {
        length = s.length
        let count = 1
        for (let i = 1; i < s.length; i++) {
            if (s[i - 1] === s[i]) {
                count += 1
                if (count === k) {
                    s.splice(i - k + 1, k)
                    break
                }
            } else {
                count = 1
            }
        }
    }
    return s.join('')
};
// Time Complexity is O(N) where N is the string length
// Space complexity is O(N) and N is the stack length and we have N chars in stack
var removeDuplicates2 = function (s, k) {
    debugger
    let stack = [];
    s = s.split('');
    for (let i = 0; i < s.length; ++i) {
        if (i === 0 || s[i] !== s[i - 1]) {
            stack.push(1);
        } else {
            stack[stack.length - 1]++;

            if (stack[stack.length - 1] === k) {
                stack.pop();
                s.splice(i - k + 1, k);
                i = i - k;
            }
        }
    }
    return s.join('');
};

removeDuplicates2("deeedbbcccbdaa", 3)