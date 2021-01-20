/**
 * @param {number} num
 * @return {string}
 */
// Time Complexity is O(1). As there is a finite set of roman numerals. It is hard to define how many time
    // the loop can iterate
    // Space Complexity is O(1). Amount of
    // memory doesn't change with the size of the input integer

const intToRoman = function (num) {
        const symbol = {
            1000: "M",
            900: "CM",
            500: "D",
            400: "CD",
            100: "C",
            90: "XC",
            50: "L",
            40: "XL",
            10: "X",
            9: "IX",
            5: "V",
            4: "IV",
            1: "I",
        }
        debugger
        const numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10,9, 5, 4, 1]
        let currentNumber = Number(num)
        let result = ''
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] <= currentNumber) {

                let timeFits = Math.floor(currentNumber / numArr[i])
                currentNumber = currentNumber - timeFits * numArr[i]
                result = result + symbol[numArr[i]].repeat(timeFits)
            }
        }
        return result
    };

console.log(
    intToRoman(9)
)