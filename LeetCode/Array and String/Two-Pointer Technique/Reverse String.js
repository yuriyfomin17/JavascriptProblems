/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//Time complexity is O(N/2) where N is the size of an array
// since we are not utilizing any extra space so Space complexity is O(1)
const reverseString = function (s) {
    let replace
    let length = s.length
    for (let i = 0; i < length/2; i++) {
        replace = s[i]
        s[i] = s[length - 1 - i]
        s[length - 1 - i] = replace
    }

};