/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    const checker = {}
    let maxString = -Infinity
    let start = 0
    let end = 0
    debugger
    while (end < s.length) {
        if (checker[s[end]] === undefined) {
            checker[s[end]] = end
            end += 1
            maxString = Math.max(maxString, end - start)
        } else {
            delete checker[s[start]]
            start += 1
        }
    }

    return maxString===-Infinity?0:maxString
};

console.log(
    lengthOfLongestSubstring("")
)