/**
 * @param {string[]} strs
 * @return {string}
 */

//Time complexity is O(S) where S is the sum of all characters in all strings
//Space complexity is O(1) since we are using only constant amount of space
const longestCommonPrefix = function (strs) {
    let currString = strs[0]
    let index = 0
    if (strs.length === 0) {
        return ''
    }
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(currString) !== 0 && index >= 0) {
            index = currString.length - 1
            currString = currString.slice(0, index)
            index -= 1
        }

    }
    return currString
};