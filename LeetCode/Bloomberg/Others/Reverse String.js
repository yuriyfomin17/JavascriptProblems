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


var reverse2 = function(num) {
    debugger
    let arr = [];
    const sign = num > 0 ? 1 : -1 ;
    num = Math.abs(num);
    while(num) {
        let digit = num%10;
        arr.push(digit);
        num = Math.floor(num/10);
    }
    let res = Number(arr.join(''));
    return res > Math.pow(2, 31) ? 0 : res*sign;
};

reverse2(536)
