/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
const multiply = function (A, B) {
    const result = []
    debugger
    for (let rowA = 0; rowA < A.length; rowA++) {
        let currArr = []
        for (let columnB = 0; columnB < B[0].length; columnB++) {
            let currRowB = []
            let currRowA = A[rowA].slice()

            for (let rowB = 0; rowB < B.length; rowB++) {
                currRowB.push(B[rowB][columnB])
            }
            currRowA.map((el, index) => {
                currRowA[index] = el * currRowB[index]
            })
            currArr.push(currRowA.reduce((acc, value) => {
                return acc + value
            }, 0))
        }
        result.push(currArr)
    }
    return result
};
console.log(
    multiply([[1, -5]],
        [[12], [-1]])
)
