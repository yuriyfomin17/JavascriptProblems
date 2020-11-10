/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    debugger
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
console.log(
    reverse(1534236469)
)
