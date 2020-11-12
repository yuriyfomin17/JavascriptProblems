
// TIme Complexity is n^2/k
// Space complexity is O(1)
var removeDuplicates = function (s, k) {
    s = s.split('');

    let length = -1;
    // when the length changes, iterate again
    while (length !== s.length) {
        // remember the length of current string
        length = s.length;
        // reset count for each new iteration
        for (let i = 0, count = 1; i < s.length; ++i) {
            // when first or current is not equal to previous
            if (i === 0 || s[i] !== s[i - 1]) {
                // reset count to 1
                count = 1;
                // if the current is the same as previous one
            } else {
                // increase the count
                count++;
                // if the count equals to k
                if (count === k) {
                    // delete the last k characters
                    s.splice(i - k + 1, k);
                    // leave the loop
                    break;
                }
            }
        }
    }
    return s.join('');
};
// Time Complexity is O(N)
// Space complexity is O(N)
var removeDuplicates = function (s, k) {
    let stack = [];
    s = s.split('');
    for (let i = 0; i < s.length; ++i) {
        if (i == 0 || s[i] !== s[i - 1]) {
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