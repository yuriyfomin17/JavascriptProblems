/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// Time Complexity is O(logN). Each time formula (x^n)^2 = x^2*n is applied
    // n is reduced by half. Thus at most O(log(N)) computations are needed
    // Space complexity is O(log(N)) for each computation we need to store result
    // x^n/2. We need to do the computation O(log(N)) time, so the space complexity is O(log(N))
const myPow = function (x, n) {
    debugger
    const helper = (x, n) => {
        if (n < 0) {
            return helper(1 / x, -n)
        } else if (n === 0) {
            return 1
        } else if (n === 1) {
            return x
        } else if (n % 2 === 0) {
            return helper(x * x, n / 2)
        } else if (n % 2 === 1) {
            return x * helper(x * x, (n - 1) / 2)
        }

    }
    const value = helper(x, n)
    return value

};
// let result = a (to the power b)
// log(result) = b* log(a)
// result = exp(b* log(a))


//problem arises, when a will be negative.
// because log of negatives, isnt feasible
// to handle that issue,
// i'm first calculating b*log(a)
// then,if b is odd, then, multiply the result with(-1)
// else for even number of b's, return result
// Time Complexity is O(1)
// Space Complexity is O(1)
const myPow = function (a, b) {

    let flag = 0

    // checking if a is negative
    if (a < 0) {
        a = Math.abs(a)
        if (b % 2 !== 0) flag = 1
        let res = Math.exp(b * Math.log(a))
        return (flag === 1 ? res * -1 : res)
    }



    // when a is not negative
    else return Math.exp((b) * Math.log(a))
};

console.log(
    myPow(2, 10)
)

// Iterative