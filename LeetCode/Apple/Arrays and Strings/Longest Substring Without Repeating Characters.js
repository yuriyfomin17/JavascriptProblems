/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity is O(N) where N is the size of the string
// Space Complexity is O(K) where K max is the length of the string which is N
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

    return maxString === -Infinity ? 0 : maxString
};

console.log(
    lengthOfLongestSubstring("")
)