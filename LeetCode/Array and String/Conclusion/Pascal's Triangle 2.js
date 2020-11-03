/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// Time complexity is O(K^2) since we need to remember previous rows so time complexity woud be (K-1)*(K) which is roughtly k^2
// Space Complexity would be simpley O(k-1) + O(K) since we are rememebring only previous array. Hence, O(K)
const getRow = function (rowIndex) {
    let result = []
    for (let i = 0; i <= rowIndex; i++) {
        if (result.length === 0) {
            result.push(1)
        } else {
            let numToInsert = result.length - 1
            let count = 0
            let copy = result
            result = []
            for (let i = 0; i < copy.length - 1; i++) {
                result.push(copy[i] + copy[i + 1])
            }
            result.unshift(1)
            result.push(1)
        }
    }
    return result
};

console.log(getRow(0))
// Time complexity is O(K) since we calculate each term exactly once
// Space complexity O(k) since we are storing only result of calculation
const getRowM = function (rowIndex) {
    const result = [1]
    if(rowIndex===0){
        return result
    }
    const numElements = rowIndex + 1
    for (let i = 1; i < numElements; i++) {
        let currDiff = (rowIndex - i + 1) / i
        result.push(result[result.length - 1] * currDiff)
    }
    return result
};

getRowM(4)