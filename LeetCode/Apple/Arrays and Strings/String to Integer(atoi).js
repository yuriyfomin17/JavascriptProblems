/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {

    let i = 0;
    let sign = 1;
    let result = 0;

    //Discard whitespaces in the beginning
    while (i < str.length && str[i] === ' ') i++

    // Check if optional sign if it exists
    if (i < str.length && (str[i] === '+' || str[i] === '-')) {
        sign = (str[i] === '-') ? -1 : 1;
        i++
    }

    const MAX_SAFE_32_INT = Math.pow(2,31) - 1
    const MIN_SAFE_32_INT = -Math.pow(2,31)

    // Build the result and check for overflow/underflow condition
    while (i < str.length && str[i].match(/[0-9]/) != null) {
        const num = str[i] - '0'
        // the second condition of this statement was hard to understand, it
        // handles the situation where we are reaching our 32-bit boundary limit, and we need to check the very last digit.
        if (result > Math.floor(MAX_SAFE_32_INT / 10) ||
            (result === Math.floor(MAX_SAFE_32_INT / 10) && num > MAX_SAFE_32_INT % 10)) {
            return (sign === 1) ? MAX_SAFE_32_INT : MIN_SAFE_32_INT;
        }

        // times 10 is a shift-left action
        result = result * 10 + num;
        i++
    }

    return result * sign;
};