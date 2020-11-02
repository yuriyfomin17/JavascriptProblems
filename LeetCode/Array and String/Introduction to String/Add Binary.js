/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    const numA = a.split('')
    const numB = b.split('')
    let indexA = numA.length - 1
    let indexB = numB.length - 1
    let big = Math.max(indexA, indexB)
    let carry = 0
    const result = []
    for (let i = big; i >= 0; i--) {
        if (numA[indexA] === '1') {
            carry += 1
        }
        if (numB[indexB] === '1') {
            carry += 1
        }
        indexA -= 1
        indexB -= 1
        if (carry % 2 === 1) {
            result.unshift('1')
        } else {
            result.unshift('0')
        }
        carry = Math.trunc(carry / 2)
    }
    if (carry === 1) {
        result.unshift('1')
    }
    return result.reduce((acc, val) => acc + val, '')
};