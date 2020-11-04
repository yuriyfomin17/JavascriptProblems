/**
 * @param {number} numRows
 * @return {number[][]}
 */
// Time complexity is O(n^2) since we iterate numRows and for each numRows we iterate through
// previous row in result
// Space complexity is O(K) where K is the length of the current array at mot it can be numRows
const generate = function (numRows) {
    if (numRows === 0) {
        return []
    }
    debugger
    const result = []
    for (let i = 1; i <= numRows; i++) {
        if (i === 1) {
            result.push([1])
        } else {
            let count = i - 2
            let currArray = []
            let index = 0
            for (let k = 0; k < count; k++) {
                currArray.push(result[result.length - 1][index] + result[result.length - 1][index + 1])
                index += 1
            }
            currArray.unshift(1)
            currArray.push(1)
            result.push(currArray)
        }
    }
    return result
};
generate(5)