/**
 * @param {number} n
 * @return {number}
 */
const lastRemaining = function (n) {
    let iteration = 0
    let point = 1
    let interval = 1
    while (n > 1) {
        if (n % 2 === 1 || iteration % 2 === 0) {
            point += interval
            iteration += 1
            interval *= 2
            n = Math.floor(n / 2)
        } else {
            iteration += 1
            interval *= 2
            n = Math.floor(n / 2)
        }
    }
    return point
};