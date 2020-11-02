/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    let replace
    let length = s.length
    for (let i = 0; i < length/2; i++) {
        replace = s[i]
        s[i] = s[length - 1 - i]
        s[length - 1 - i] = replace
    }

};