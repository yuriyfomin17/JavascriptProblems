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

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
    const m = A.length
    const n = B.length
    const p = B[0].length


    // m x p
    let result = new Array(m)
    for (let i = 0; i < m; i++)
        result[i] = new Array(p)


    const zeroRowsOfA = new Set()
    const zeroColsOfB = new Set()

    perRowOfA:
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const val = A[i][j]
                if (val !== 0)
                    continue perRowOfA
            }

            zeroRowsOfA.add(i)
        }

    perColOfB:
        for (let j = 0; j < p; j++) {
            for (let i = 0; i < n; i++) {
                const val = B[i][j]
                if (val !== 0)
                    continue perColOfB
            }

            zeroColsOfB.add(j)
        }


    for (let i = 0; i < m; i++) {
        const rowIsZero = zeroRowsOfA.has(i)

        for (let j = 0; j < p; j++) {
            const colIsZero = zeroColsOfB.has(j)

            let outcome= 0
            if (!rowIsZero && !colIsZero) {
                for (let k = 0; k < n; k++) {
                    const a = A[i][k]
                    const b = B[k][j]
                    const addMe = a * b
                    outcome += addMe
                }
            }

            result[i][j] = outcome
        }
    }


    return result
};
