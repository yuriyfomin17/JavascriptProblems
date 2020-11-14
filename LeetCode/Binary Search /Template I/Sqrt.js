/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    if (x < 2) {
        return x
    }
    let left = 2
    let right = x / 2
    while (left <= right) {
        let guess = Math.floor((left + right) / 2)
        let num = guess * guess
        if (num < x) {
            left = guess + 1
        } else if (num > x) {
            right = guess - 1
        } else {
            return guess
        }
    }
    return Math.floor(right)
};

console.log(
    mySqrt(3)
)