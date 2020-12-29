/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity is O(N) where N is the length of the string. Memoization
    // helps in pruning the recursion tree and hence decoding for an index only once
    // Thus this solution is linear time complexity

    // Space Complexity O(N). Dictionary used for memo would take the space equal to the length
    // of the string. There would be an entry for each index value.
    // The recursion stack would also be equal to the length of the string
const numDecodings = function (s) {
    const memo = {}
    const recursionWithMemo = (index, string) => {

        // if you reach the end of the string
        // Return 1 for success.
        if (index === string.length) {
            return 1
        }

        //if the string starts with a zero, it can't be decoded

        if (string[index] === '0') {
            return 0
        }

        if (index === string.length - 1) {
            return 1
        }

        // Memoization is needed since we might encounter the same sub-string
        if (memo[index] !== undefined) {
            return memo[index]
        }
        let answer = recursionWithMemo(index + 1, string)

        if (parseInt(string.substring(index, index + 2)) <= 26) {
            answer += recursionWithMemo(index + 2, string)
        }
        memo[index] = answer
        return answer

    }
    if (s === null || s.length === 0) {
        return 0
    }
    return recursionWithMemo(0, s)
};