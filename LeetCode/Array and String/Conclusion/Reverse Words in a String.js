/**
 * @param {string} s
 * @return {string}
 */
// Space Complexity is O(N) O(N)+ O(N) + O(N) (map, reverse, reduce)
// Space Complexity is O(N) since we utilize array to store results
const reverseWords = function (s) {
    s = s.trim()
    let newArr = s.split(' ')
    const result = []
    newArr.map(function (el) {
        if (el !== '') {
            result.push(el)
        }
    })
    return result.reverse().reduce(function (acc, val, index) {
        if (index === 0) {
            return acc + val
        } else {
            return acc + ' ' + val
        }
    }, '')
};

console.log(reverseWords("a good   example"))