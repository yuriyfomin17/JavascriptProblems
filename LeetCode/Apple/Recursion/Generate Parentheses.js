/**
 * @param {number} n
 * @return {string[]}
 */
// Space Complexity: O(2n) = O(n); call stack
const generateParenthesis = function (n) {
    const result = []
    debugger
    const permutation = (open, close, curr) => {
        if (curr.length === 2 * n) {
            result.push(curr)
            return
        }
        if (open > 0) {
            permutation(open - 1, close+1 , curr + "(")
        }
        if (close > 0) {
            permutation(open, close - 1, curr + ")")
        }
    }
    permutation(n, 0, '')
    return result
};

console.log(
    generateParenthesis(3)
)