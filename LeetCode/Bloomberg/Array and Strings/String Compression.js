/**
 * @param {string[]} chars
 * @return {number}
 */

//Time complexity is O(N) where N is the length of the string at most we iterate through every element once
// Then we insert the number which is O(1)
// Space complexity is O(1) since we utilize only initial chars array to store the results
const compress = function (chars) {
    if (chars.length === 0) {
        return 0
    }
    if (chars.length === 1) {
        return 1
    }
    let size = chars.length
    let count = 0
    let index = 0
    let smallCount = 0
    let removed
    while (count < size) {
        while (chars[index] === chars[index + 1]) {
            removed = chars.splice(index, 1)
            smallCount += 1
            count += 1
        }
        smallCount += 1
        count += 1
        removed = chars.splice(index, 1)
        let numToInsert = 0
        if (smallCount> 1) {
            smallCount.toString(10).split('').reverse().map(el => {
                chars.splice(index, 0, el)
                numToInsert += 1
            })
        }
        chars.splice(index, 0, ...removed)
        index = index + numToInsert + 1
        smallCount = 0

    }

    return chars.length
};
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))
