/**
 * @param {number} num
 * @return {string}
 */


//Time complexity is O(N) where n is the length o string since we iterate only once through it
// Space complexity is O(1) since result is only a string
const numberToWords = function (num) {
    if (num === 0) {
        return "Zero"
    }
    const dict = {
        90: "Ninety",
        80: "Eighty",
        70: "Seventy",
        60: "Sixty",
        50: "Fifty",
        40: "Forty",
        30: "Thirty",
        20: "Twenty",
        19: "Nineteen",
        18: "Eighteen",
        17: "Seventeen",
        16: "Sixteen",
        15: "Fifteen",
        14: "Fourteen",
        13: "Thirteen",
        12: "Twelve",
        11: "Eleven",
        10: "Ten",
        9: "Nine",
        8: "Eight",
        7: "Seven",
        6: "Six",
        5: "Five",
        4: "Four",
        3: "Three",
        2: "Two",
        1: "One",

    }


    let arrString = num.toString().split('')
    let tripleCount = 0
    let smallerCount = 0
    let result = ''
    for (let i = arrString.length - 1; i >= 0; i--) {
        if (tripleCount === 3) {
            result = 'Thousand ' + result
            smallerCount = 0
            result = result.trim()
        }
        if (tripleCount === 6) {
            if(result.substring(0, 8)==='Thousand'){
                result = result.replace('Thousand','')
                result = result.trim()
            }
            result = 'Million ' + result
            result = result.trim()
            smallerCount = 0
        }
        if (tripleCount === 9) {
            debugger
            if(result.substring(0, 7)==='Million'){
                result = result.replace('Million','')
                result = result.trim()
            }
            result = 'Billion ' + result
            smallerCount = 0
        }
        if (smallerCount === 1) {
            let dictResult = dict[arrString[i] * 10]

            if (dictResult !== undefined) {
                result = dictResult + " " + result
            }
        }

        if (smallerCount === 0) {
            let dictResult = dict[arrString[i - 1] + arrString[i]]
            smallerCount += 1
            i = i - 1
            tripleCount += 1
            if (dictResult === undefined) {
                i = i + 1
                dictResult = dict[arrString[i]]
                smallerCount -= 1
                tripleCount -= 1
            }
            if (dictResult !== undefined) {
                result = dictResult + " " + result
            }

        }
        if (smallerCount === 2) {
            if (dict[arrString[i]] !== undefined) {
                result = dict[arrString[i]] + " Hundred " + result
            }

            smallerCount = 0
        }

        smallerCount += 1
        tripleCount += 1


    }
    return result.trim()
};
console.log(numberToWords(1000000000))
