/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let nextNum = digits[digits.length - 1] + 1
    nextNum = String(nextNum)
    if (nextNum.length > 1) {
        let index = digits.length - 1
        while (nextNum.length > 1 && index>= 0) {
            digits[index] = 0
            nextNum = digits[index - 1] + 1
            nextNum = String(nextNum)
            index -= 1
        }
        if(index===-1){
            digits.unshift(1)
        }else{
            digits[index] = digits[index] + 1
        }


    } else {
        digits[digits.length - 1] = digits[digits.length - 1] + 1
    }

    return digits

};

console.log(plusOne([9,9]))