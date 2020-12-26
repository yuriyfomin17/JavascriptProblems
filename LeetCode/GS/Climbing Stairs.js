/**
 * @param {number} n
 * @return {number}
 */
// Time complexity is O(N). Single loop upto n is required to calculate nth fibonacci number
    // Space complexity O(1). Constant space is used
const climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    let first = 1
    let second = 2
    for (let i = 3; i <= n; i++) {
        let third = first + second
        first = second
        second = third
    }
    return second
};