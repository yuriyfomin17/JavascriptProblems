/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {

    let index = x >= 0
    const string = '' + x
    let arr = string.split('')
    if (arr[0] === '-') {
        arr = arr.slice(1, arr.length)
    }
    arr.reverse()
    let num = arr.reduce((acc, val) => acc + val, '')
    num = Number(num)
    if (!index) {
        num = -num
    }
    if (Math.abs(num) > 2147483647) {
        return  0
    }
    return num

};

// Time Complexity is O(N)
// where N is the length of the string toString(Number)

// Space Complexity is O(1)

// Time Complexity
const reverse = function (x) {
    let result = ''
    const sign = x < 0 ? -1 : 1
    x = Math.abs(x)
    while (x !== 0) {
        let floored = Math.floor(x / 10)
        let currNum = x - floored * 10
        x = floored
        result = result + currNum
    }
    result = sign * Number(result)
    debugger
    if (result>0 && result > 2147483647) {
        return  0
    }
    if (result<0 && Math.abs(result) > 2147483648) {
        return  0
    }
    return result
};
