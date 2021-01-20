/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity is O(1). As there is a finite set of roman numerals. The maximum number can be 3999
    // Hence time complexity is O(1)
    // Space Complexity is O(1) as there are only constant number of single value number used
const romanToInt = function (s) {
    const symbol = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    let index = 0
    let result = 0
    while (s.length) {
        let firstSymbol = s.substring(index, index + 1)
        let secondSymbol = s.substring(index, index + 2)
        if (symbol[firstSymbol] > symbol[secondSymbol] || symbol[secondSymbol]===undefined) {
            result = result + symbol[firstSymbol]
            s = s.slice(1)
        }else {
            result = result + symbol[secondSymbol]
            s = s.slice(2)
        }
    }
    return result
};

console.log(
    romanToInt("MCMXCIV")
)