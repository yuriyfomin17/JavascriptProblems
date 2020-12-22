/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//Time complexity is O(N* M) where N and M is row and columns plus O(N) time for mapping again through dict
// Space complexity is O(N) where N is the dict space and array for result
const findDiagonalOrder = function (matrix) {
    const dict = new Map()
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[0].length; column++) {
            if (!dict.has(row + column)) {
                dict.set(row + column, [matrix[row][column]])
            } else {
                dict.get(row + column).push(matrix[row][column])
            }
        }
    }
    let entries = dict.entries();

    let result = []
    for (let entry of entries) {

        if (entry[0] % 2 === 0) {
            result.push(...entry[1].reverse())
        }else{
            result.push(...entry[1])
        }

    }
    return result

};
console.log(findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
