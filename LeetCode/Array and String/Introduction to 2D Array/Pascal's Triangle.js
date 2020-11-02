/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    if(numRows===0){
        return []
    }
    const result = [[1]]
    for (let i = 1; i < numRows; i++) {
        let currArray
        if (i === 1) {
            currArray = [1, 1]
            result.push(currArray)
        } else {
            currArray = []
            for (let k = 0; k < result[i - 1].length - 1; k++) {
                currArray.push(result[i - 1][k] + result[i - 1][k + 1])
            }
            currArray.unshift(1)
            currArray.push(1)
            result.push(currArray)
        }
    }
    return result
};
console.log(generate(5))
