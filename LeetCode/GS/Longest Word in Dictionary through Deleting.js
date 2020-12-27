/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
// Time Complexity: O(n * x). One iteration over all strings is required
    // Here n refers to the number of strings in list d and x
    // refers to average string length
    // Space complexity O(x) * max string variable is used.
const findLongestWord = function (s, d) {
    let maxStr = ''
    const helper = (x, y) => {
        let j = 0
        for (let i = 0; i < y.length && j < x.length; i++) {
            if (x[j] === y[i]) {
                j += 1
            }
        }
        return j === x.length
    }
    for (let i = 0; i < d.length; i++) {
        if (helper(d[i], s)) {
            if (d[i].length > maxStr.length || (d[i].length === maxStr.length && d[i]<maxStr)) {
                maxStr = d[i]
            }
        }
    }
    return maxStr
};